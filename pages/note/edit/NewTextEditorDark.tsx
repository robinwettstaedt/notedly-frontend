import React from 'react';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg';
import toolbarDefaultsDark from '../../../utils/DraftEditorUtils/toolbarDefaultsDark';
import toolbarDefaultsLight from '../../../utils/DraftEditorUtils/toolbarDefaultsLight';
import '../../../styles/NewTextEditorDark.module.css';

// have 1 TextEditor, with 1 CSS file that has preferred theme query in which the default classes' colors are updated
// toolbar= themeContext === 'dark' ? {toolbarDefaultsDark} : {toolbarDefaultsLight} in which the right SVG are given
// if necessary make use of the "wrapperClassName" and "EditorClassName" props of the Editor

// nextjs SSR specific shenanigangs
import dynamic from 'next/dynamic';
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const TextEditor = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  // save the current note to the database
  // should be called timely for autosave
  // should be called in the return of useEffect() so note gets saved when component dismounts
  const handlePost = async () => {
    try {
      const rawEditorContent = JSON.stringify(
        convertToRaw(editorState.getCurrentContent())
      );

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: rawEditorContent }),
      };
      await fetch('http://localhost:5000/api/v1/note', requestOptions);
    } catch (error) {
      console.log('error:', error);
    }
  };

  // getting the content of the note and updates the Editor's state
  const handleGet = async () => {
    try {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ _id: '612e5aa35299662c43b4ab45' }),
      };
      const response = await fetch(
        'http://localhost:5000/api/v1/note/612f949049da2901a8e6993e',
        requestOptions
      );

      const json = await response.json();
      const data = await JSON.parse(json.data.content);

      // set the content of the editor window to the content received by the api
      setEditorState(EditorState.createWithContent(convertFromRaw(data)));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="bg-gray-200 h-screen">
      <Editor
        // blockStyleFn={() => 'super'}
        editorState={editorState}
        onEditorStateChange={setEditorState}
        // toolbarStyle={styles.toolbarStyles}
        // wrapperClassName="wrapper-styles"
        // editorClassName="editor-styles"
        // toolbarStyle=ToolbarStyleObject,
        // toolbarClassName="toolbar-wrapper-dark"
        // toolbarOnFocus
        toolbar={toolbarDefaultsDark}
      />
      <button
        className="px-4 py-2 m-2 bg-gray-500 text-gray-50 border rounded"
        onClick={handleGet}
      >
        Get
      </button>
      <button
        className="px-4 py-2 m-2 bg-gray-500 text-gray-50 border rounded-md"
        onClick={handlePost}
      >
        Post
      </button>
    </div>
  );
};

export default TextEditor;

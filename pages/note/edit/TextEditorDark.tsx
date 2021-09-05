import React from 'react';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg';
import toolbarDefaultsDark from '../../../utils/DraftEditorUtils/toolbarDefaultsDark';
// import '../../../styles/TextEditorLight.module.css';

// have 1 TextEditor, with 1 CSS file that has preferred theme query in which the default classes' colors are updated
// toolbar= themeContext === 'dark' ? {toolbarDefaultsDark} : {toolbarDefaultsLight} in which the right SVG are given
// if necessary make use of the "wrapperClassName" and "EditorClassName" props of the Editor

const styles: { [key: string]: React.CSSProperties } = {
  toolbarStyles: {
    // background: 'yellow',
    // height: 50,
    // background: '#363636',
    // display: 'flex',
    // alignItems: 'center',
    width: 200,
    // gap: 20,
    // justifyContent: 'space-between',
    // flexWrap: 'nowrap',
    // overflowX: 'scroll',
    // overflowY: 'scroll',
    // whiteSpace: 'nowrap',
    // position: 'absolute',
    // bottom: 200,
  },
};

import dynamic from 'next/dynamic';
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const TextEditorDark = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

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
    <div>
      <div className="w-screen bg-gray-800 h-40" />
      <Editor
        // blockStyleFn={() => 'super'}
        editorState={editorState}
        onEditorStateChange={setEditorState}
        // toolbarStyle={styles.toolbarStyles}
        wrapperClassName="editor-wrapper"
        editorClassName="editor-wrapper"
        // toolbarStyle=ToolbarStyleObject,
        toolbarClassName="toolbar-wrapper-dark"
        // toolbarOnFocus
        toolbar={toolbarDefaultsDark}
      />
      <button
        className="px-4 py-2  bg-gray-500 text-gray-50 border rounded"
        onClick={handleGet}
      >
        Get
      </button>
      <button
        className="px-4 py-2  bg-gray-500 text-gray-50 border rounded-md"
        onClick={handlePost}
      >
        Post
      </button>
    </div>
  );
};

export default TextEditorDark;

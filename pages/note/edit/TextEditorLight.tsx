import React from 'react';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg';
import toolbarDefaultsLight from '../../../utils/DraftEditorUtils/toolbarDefaultsLight';
// import '../../../styles/TextEditorLight.module.css';

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

const TextEditorLight = () => {
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
    <div className="bg-gray-50">
      <Editor
        // blockStyleFn={() => 'super'}
        editorState={editorState}
        onEditorStateChange={setEditorState}
        // toolbarStyle={styles.toolbarStyles}
        // wrapperClassName="wrapper-styles"
        // editorClassName="editor-styles"
        // toolbarStyle=ToolbarStyleObject,
        toolbarClassName="toolbar-wrapper-light"
        // toolbarOnFocus
        toolbar={toolbarDefaultsLight}
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

export default TextEditorLight;

import React, { useEffect, useState, useContext } from 'react';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg';
import toolbarDefaultsDark from '../../lib/utils/DraftEditorUtils/toolbarDefaultsDark';
import { useAuthedFetchOnPageLoad } from '../../lib/utils/customHooks/useAuthedFetchOnPageLoad';

// nextjs SSR specific shenanigangs
import dynamic from 'next/dynamic';
import { TokenContext } from '../../lib/contexts/TokenContext';
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const TextEditorDark = () => {
  const { token } = useContext(TokenContext);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const auth = 'Authorization';

  //   save the current note to the database
  //   should be called timely for autosave
  //   should be called in the return of useEffect() so note gets saved when component dismounts
  const handlePost = async () => {
    try {
      const rawEditorContent = JSON.stringify(
        convertToRaw(editorState.getCurrentContent())
      );

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          auth: token,
        },
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
        headers: {
          'Content-Type': 'application/json',
          auth: token,
        },
      };
      const response = await fetch(
        'http://localhost:5000/api/v1/note/6144848296e3cb80f085020a',
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
    <>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        // wrapperClassName="wrapper-styles"
        // editorClassName="editor-styles"
        toolbarClassName="toolbar-wrapper-dark"
        toolbar={toolbarDefaultsDark}
      />
      <button onClick={handleGet}>Get</button>
      <button onClick={handlePost}>Post</button>
    </>
  );
};

export default TextEditorDark;

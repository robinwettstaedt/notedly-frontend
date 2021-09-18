import React from 'react';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg';
import toolbarDefaultsLight from '../../lib/utils/DraftEditorUtils/toolbarDefaultsLight';
import SignOut from '../auth/SingOut';

// nextjs SSR specific shenanigangs
import dynamic from 'next/dynamic';
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const TextEditorLight = () => {
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
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDQ3ZmUzNWJhN2ZlMWY2NWFmYmIyOSIsImlhdCI6MTYzMTg3OTEzOSwiZXhwIjoxNjMxODgwOTM5fQ.nGSR2-E1WYdU3G15Jw8i5u_SlQR02b1IL87K6XUdrqA',
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
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDQ3ZmUzNWJhN2ZlMWY2NWFmYmIyOSIsImlhdCI6MTYzMTg3OTEzOSwiZXhwIjoxNjMxODgwOTM5fQ.nGSR2-E1WYdU3G15Jw8i5u_SlQR02b1IL87K6XUdrqA',
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
        toolbarClassName="toolbar-wrapper-light"
        toolbar={toolbarDefaultsLight}
      />
      <button onClick={handleGet}>Get</button>
      <button onClick={handlePost}>Post</button>
      <SignOut />
    </>
  );
};

export default TextEditorLight;

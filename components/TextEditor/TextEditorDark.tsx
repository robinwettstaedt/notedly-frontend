import { useState } from 'react';
import { useTokenContext } from '../../lib/contexts/TokenContext';

import {
  EditorState,
  convertFromRaw,
  convertToRaw,
  RawDraftContentState,
} from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg';

import toolbarDefaultsDark from '../../lib/constants/DraftEditorConstants/toolbarDefaultsDark';

import {
  NoteType,
  CreateNoteType,
  UpdateNoteType,
} from '../../lib/types/noteTypes';

// nextjs SSR specific shenanigangs
import dynamic from 'next/dynamic';
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const TextEditorDark = (noteID: any) => {
  const { token } = useTokenContext();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  //   save the current note to the database
  //   should be called timely for autosave
  //   should be called in the return of useEffect() so note gets saved when component dismounts
  const handlePost = async () => {
    try {
      const rawEditorContent = JSON.stringify(
        convertToRaw(editorState.getCurrentContent())
      );

      const createNoteData: CreateNoteType = {
        title: 'Hi',
        content: rawEditorContent,
        notebook: '61b8f5441d88c8864c105393',
        emoji: {},
      };

      await fetch(`${process.env.API_SERVER_URL}/api/v1/note`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(createNoteData),
      });

      console.log(JSON.stringify(createNoteData));
    } catch (error) {
      console.log('error:', error);
    }
  };

  // updating a note
  const handlePut = async () => {
    try {
      const rawEditorContent = JSON.stringify(
        convertToRaw(editorState.getCurrentContent())
      );

      const updateNoteData: UpdateNoteType = {
        // title: 'Hi',
        content: rawEditorContent,
        // notebook: '614a01c1cbdcde7f14e6ddec',
        // emoji: {},
      };

      await fetch(`${process.env.API_SERVER_URL}/api/v1/note/${noteID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(updateNoteData),
      });
    } catch (error) {
      console.log('error:', error);
    }
  };

  // getting the content of the note and updates the Editor's state
  const handleGet = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/note/${noteID}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        }
      );

      const json = await response.json();
      const data = await JSON.parse(json.data.content);

      console.log(data);

      const note: NoteType = data;

      // set the content of the editor window to the content received by the api
      setEditorState(
        EditorState.createWithContent(convertFromRaw(note.content))
      );
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
      <button onClick={handlePost}>CREATE</button>
      <button onClick={handlePut}>UPDATE</button>
    </>
  );
};

export default TextEditorDark;

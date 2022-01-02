import { useState, useEffect } from 'react';
import { useTokenContext } from '../../lib/contexts/TokenContext';

import {
  EditorState,
  convertFromRaw,
  convertToRaw,
  RawDraftContentState,
} from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg';

import toolbarDefaultsDark from '../../lib/constants/DraftEditorConstants/toolbarDefaultsDark';

import { stateToHTML } from 'draft-js-export-html';
// nextjs SSR specific shenanigangs
import dynamic from 'next/dynamic';
import {
  getNote,
  updateNoteContent,
} from '../../lib/Helpers/apiRequests/editorRequests';
import { NoteType } from '../../lib/types/noteTypes';
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

type TextEditorProsType = {
  note: NoteType;
};

const TextEditorDark = ({ note }: TextEditorProsType) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [html, setHtml] = useState(
    stateToHTML(editorState.getCurrentContent())
  );

  useEffect(() => {
    const parseNoteContent = async () => {
      const parsedContent = await JSON.parse(note.content);

      //   // set the content of the editor window to the content received by the api (get req)
      setEditorState(
        EditorState.createWithContent(convertFromRaw(parsedContent))
      );
    };
    parseNoteContent();
  }, [note]);

  // update the html
  useEffect(() => {
    setHtml(stateToHTML(editorState.getCurrentContent()));
  }, [editorState]);

  //   // update the note content every 10 seconds
  //   useEffect(() => {
  //     const saveNoteContent = async () => {
  //       // for updating the notes content (put req)
  //       const rawEditorContent = JSON.stringify(
  //         convertToRaw(editorState.getCurrentContent())
  //       );

  //       await updateNoteContent(note._id, rawEditorContent);
  //     };

  //     const interval = setInterval(() => {
  //       saveNoteContent();
  //     }, 10000);

  //     return () => clearInterval(interval);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  const saveNoteContent = async () => {
    // for updating the notes content (put req)
    const rawEditorContent = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );

    await updateNoteContent(note._id, rawEditorContent);
  };

  return (
    <>
      {isEditing ? (
        <>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            // wrapperClassName="wrapper-styles"
            // editorClassName="editor-styles"
            toolbarClassName="toolbar-wrapper-dark"
            toolbar={toolbarDefaultsDark}
          />
          <button onClick={() => setIsEditing(!isEditing)}>stop editing</button>
          <button onClick={saveNoteContent}>save</button>
        </>
      ) : (
        <>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <button onClick={() => setIsEditing(!isEditing)}>edit</button>
        </>
      )}
    </>
  );
};

export default TextEditorDark;

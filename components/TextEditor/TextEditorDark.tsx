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
import { getNote } from '../../lib/Helpers/apiRequests/editorRequests';
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

type TextEditorProsType = {
  // because of nextjs router query
  noteID: string | string[] | undefined;
};

const TextEditorDark = ({ noteID }: TextEditorProsType) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const [html, setHtml] = useState(
    stateToHTML(editorState.getCurrentContent())
  );

  const switchEditingMode = () => {
    setIsEditing(!isEditing);
  };
  //   useEffect(() => {
  //     const handleGet = async () => {
  //       const note = await getNote(noteID);

  //       //   // set the content of the editor window to the content received by the api (get req)
  //       setEditorState(
  //         EditorState.createWithContent(convertFromRaw(note.content))
  //       );
  //     };
  //     handleGet();
  //   }, [noteID]);

  useEffect(() => {
    setHtml(stateToHTML(editorState.getCurrentContent()));
  }, [editorState]);

  // for updating the notes content (put req)
  //   const rawEditorContent = JSON.stringify(
  // 	convertToRaw(editorState.getCurrentContent())
  //   );

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
          <button onClick={switchEditingMode}>stop editing</button>
        </>
      ) : (
        <>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <button onClick={switchEditingMode}>edit</button>
        </>
      )}
    </>
  );
};

export default TextEditorDark;

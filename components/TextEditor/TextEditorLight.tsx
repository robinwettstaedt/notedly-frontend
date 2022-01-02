import { useState } from 'react';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { EditorProps } from 'react-draft-wysiwyg';

// nextjs SSR specific shenanigangs
import dynamic from 'next/dynamic';
const Editor = dynamic<EditorProps>(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

// outdated, has to be updated with everything thats new in the DARK TextEditor Component ############################################################################
const TextEditorLight = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <>
      {/* <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        // wrapperClassName="wrapper-styles"
        // editorClassName="editor-styles"
        toolbarClassName="toolbar-wrapper-light"
        toolbar={toolbarDefaultsLight}
      />
      <button onClick={handleGet}>Get</button>
      <button onClick={handlePost}>Post</button>
      <SignOut /> */}
    </>
  );
};

export default TextEditorLight;

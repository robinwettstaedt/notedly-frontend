import TextEditorDark from '../../../components/TextEditor/TextEditorDark';
import usePrivateRoute from '../../../lib/hooks/usePrivateRoute';

const Note = () => {
  usePrivateRoute();

  return (
    <div>
      <TextEditorDark noteID="hi" />
    </div>
  );
};

export default Note;

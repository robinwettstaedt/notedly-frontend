import TextEditorLight from '../../components/TextEditor/TextEditorLight';
import TextEditorDark from '../../components/TextEditor/TextEditorDark';
import usePrivateRoute from '../../lib/hooks/usePrivateRoute';
import { useRouter } from 'next/router';

const Note = () => {
  usePrivateRoute();

  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <TextEditorDark noteID={pid} />
      {/* <TextEditorLight /> */}
    </div>
  );
};

export default Note;

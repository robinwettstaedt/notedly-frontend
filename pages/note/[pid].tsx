import { useRouter } from 'next/router';
import { withAuth } from '../../components/Auth/withAuth';
import TextEditorDark from '../../components/TextEditor/TextEditorDark';

const Note = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <TextEditorDark noteID={pid} />
    </div>
  );
};

export default withAuth(Note);

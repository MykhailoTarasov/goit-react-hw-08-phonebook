import { useAuth } from 'hooks/useAuth';
import { Opening } from 'components/Openning/Openning';
import { Container } from './Home.Styled';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <h1>Hello, this is your PhoneBook.</h1>
      {isLoggedIn ? (
        <Opening />
      ) : (
        <p>
          Create your own unique account and get the opportunity to record your
          contacts.
        </p>
      )}
      
      <p>Fast, Secure and Friendly React Application</p>
    </Container>
  );
}
import { useAuth } from 'hooks/useAuth';
import { Opening } from 'components/Openning/Openning';
import { Text, Title } from './Home.Styled';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Title>Hello, this is your PhoneBook.</Title>
      {isLoggedIn ? (
        <Opening />
      ) : (
        <Text>
          Create your own unique account and get the opportunity to record your
          contacts.
        </Text>
      )}

      <Text>Fast, Secure and Friendly React Application</Text>
    </div>
  );
}

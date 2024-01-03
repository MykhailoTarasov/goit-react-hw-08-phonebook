import { Container, Link, Text } from "./Openning.Styled";

export const Opening = () => {
    return (
      <Container>
        <Text>
          It is designed to help your brain not remember numbers, but write them
          down.
        </Text>
        <Link to={'/contacts'}>Add contact</Link>
      </Container>
    );
  };
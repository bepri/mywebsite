import {
  Button,
  ButtonGroup,
  Container,
  Group,
  Image,
  PolymorphicComponentProps,
  ScrollArea,
  Space,
  Stack,
  Text,
  TextProps,
  Title,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFile,
  IconMail,
} from "@tabler/icons-react";
import headshot from "./assets/headshot.jpg";
import "./styles/App.css";

export default function App() {
  const Paragraph = (props: PolymorphicComponentProps<"p", TextProps>) => {
    return (
      <>
        <Text {...props} />
        <Space h='sm' />
      </>
    );
  };

  const encEmail = "aW1hbmlAYmVwcmkuZGV2";
  return (
    <>
      <Group h='100vh' pt='2em'>
        <Stack pl='2em' align='center' h='100%' pos='sticky' justify='center'>
          <Image
            src={headshot}
            radius='50%'
            alt='A portrait of me!'
            w='10em'
            h='10em'
          />
          <Text size='xl' c='#e8e6e3' ta='center'>
            Imani Pelton
          </Text>
          <ButtonGroup orientation='vertical' w='100%'>
            <Button leftSection={<IconFile />} variant='outline' component='a' href='/resume.pdf'>
              Resume
            </Button>
            <Button leftSection={<IconBrandGithub />} variant='outline' component='a' href='https://github.com/bepri'>
              GitHub
            </Button>
            <Button leftSection={<IconBrandLinkedin />} variant='outline' component='a' href='https://linkedin.com/in/imanipelton'>
              LinkedIn
            </Button>
            <Button
              leftSection={<IconMail />}
              variant='outline'
              component='a'
              href={`mailto:${atob(encEmail)}`}
            >
              Contact me
            </Button>
          </ButtonGroup>
        </Stack>
        <Container c='#e8e6e3' ta='center' pt='2em'>
          <ScrollArea>
            <Title order={1}>Hello! I'm Imani.</Title>
            <Space h='md' />
            <Title order={3}>About me</Title>
            <Paragraph>
              I am studying at the University of Tennessee Knoxville for a
              Master's of Computer Science, which will be completed in May of
              2024! I received my Bachelor's degree of the same from UTK in
              2023. I am interested in software engineering, DevOps, and
              software security. Outside of computers, I also have a passion for
              linguistics, geography, and world culture. I know a little French
              (j'ai appris le français à l'université pendant deux ans), and
              continue to study it when I find the time. I hope to learn many
              more languages in the future. My next target is probably either
              Norwegian or Korean.
            </Paragraph>
            <Paragraph>
              My interests in software are typically, first and foremost, about
              it just being usable, dang it. While in school, I often found that
              however cool the program I was writing for homework was, it just
              wasn't a very helpful tool. A rewrite of Make? An emulation of
              RAM? A reimplementation of AES? I'm proud of these programs, I
              think it's awesome that I was able to make them and I appreciate
              the knowledge that those projects brought me. However, no one's
              gonna use that! I want to write novel command-line programs,
              user-facing GUI programs, something you don't need a degree to
              understand.
            </Paragraph>
            <Paragraph>
              I additionally find a lot of joy in automation and documentation.
              This goes for just about anything. Be it DevOps or basic workflow
              tools, it's just an awesome feeling to see things "just work" and
              most importantly, make what they do clear. I've written scripts
              for loading and managing SSH keys, GitHub Actions workflows for
              automatically verifying and deploying code, and Makefiles that
              build a whole containerized development system. Usually setting
              this up is what I do before I even start coding.
            </Paragraph>
            <Paragraph>
              More info about me can be found on the left - reach out and say
              hi!
            </Paragraph>
          </ScrollArea>
        </Container>
      </Group>
    </>
  );
}

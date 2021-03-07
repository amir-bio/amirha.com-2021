import React from 'react';
import me from './media/me.png'
import lispExtensionScreenshot from './media/lisp_extension_screenshot.png'
import pedestrianTracker from './media/pedestrian_tracker.png'
import './App.css';
import {
    Box,
    Center,
    ChakraProvider,
    extendTheme,
    Flex,
    Heading,
    Image,
    Link,
    Spacer,
    Tag,
    Text
} from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import { RiGithubFill, RiGitlabFill, RiLinkedinFill } from 'react-icons/ri'
import { BsDisplay } from 'react-icons/bs'

const colors = {
    brand: {
        primary: "#102A4C",
        secondary: "#7755CC",
        action: {
            light: "#7755CC",
            dark: "#102A4C",
        },

        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
    },
}
// Version 2: Using functions
const theme = extendTheme({
    colors,
    styles: {
        global: (props) => ({
            body: {
                fontFamily: "body", // TODO: make font Robot
                color: mode("gray.800", "whiteAlpha.900")(props),
                // bg: mode("white", "gray.800")(props), //
                bg: mode("brand.primary", "gray.800")(props),
                lineHeight: "base",
            },
        }),
    },
})

const TechCard = Box // TODO
const LightLink = (props: any) => (<Link props color="brand.action.light"> {props.children}</Link>)
const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Box
                //
                // mx="auto"
                // bg="brand.primary"
            >
                <Box bg="brand.primary" color="white">
                    <Box display={{lg: "flex"}} maxW="1140px" mx="auto" pt={50}>
                        <Box
                            py={{sm: 5, lg: 100}}
                            pr={{sm: 5, lg: 100}}
                            textAlign={{sm: "center", lg: "left"}}
                        >
                            <Heading as="h1">Hey 👋, I’m Amirhossein Andohkosh</Heading>
                            <Box pt="30" fontSize="18">Senior Software Engineer at
                                {' '}
                                <LightLink href="https://upsidetechnology.co/" rel="noopener noreferrer">
                                    Upside Technologies
                                </LightLink>
                            </Box>
                        </Box>
                        <Box>
                            <Image
                                mx={{sm: "auto", lg: 0}}
                                mb={{sm: 10, lg: 0}}
                                borderRadius="full"
                                objectFit="cover"
                                align="75% 20%"
                                boxSize="300px"
                                src={me}
                                alt="Amirhossein Andohkosh"
                            />
                        </Box>
                    </Box>
                    <Center px="10">
                        <Box mx="4">
                            <a href="https://www.linkedin.com/in/amirhossein-andohkosh/" rel="noopener noreferrer"
                               target="_blank">
                                <RiLinkedinFill size={25} color="white"/>
                            </a>
                        </Box>
                        <Box mx="4">
                            <a href="https://github.com/amirha97" rel="noopener noreferrer" target="_blank">
                                <RiGithubFill size={25} color="white"/>
                            </a>
                        </Box>
                        <Box mx="4">
                            <a href="https://gitlab.com/amirH.A" rel="noopener noreferrer" target="_blank">
                                <RiGitlabFill size={25} color="white"/>
                            </a>
                        </Box>


                    </Center>
                </Box>

                <Box bg="white" my="10" pt="10" pb="150" w="100%">
                    <Box maxW="1140px" mx="auto">
                        <Heading as="h2">About</Heading>
                        <Text py="10">
                            I’m a Software Engineer based in London. I graduated in Computer Science from the University
                            of
                            Cambridge in 2018.
                            <br/>
                            <br/>
                            Currently I’m working at Upside, as a Senior Software Engineer. We are revolutionising
                            investing not just for investors, but for everyone from enthusiasts to portfolio manager and
                            professional analysts!
                            <br/>
                            <br/>
                            Prior to Upside I worked at Acre as a Senior Backend Engineer and as a computer scientist at
                            Netcraft before that.
                            <br/>
                            <br/>
                            My story →
                        </Text>
                    </Box>
                </Box>

                <Flex maxW="1140px" mx="auto">
                    <TechCard bg="brand.secondary" mr={10} mt={-150} p={5}>
                        <Flex pb={20} justify="space-between" color="white">
                            <Heading>Frontend</Heading>
                            <BsDisplay size={50}/>
                        </Flex>
                        <Box>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">React</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">TypeScript</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">JSS</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">Webpack</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">Cypress</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">GraphQL</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">Storybook</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">jQuery</Tag>
                        </Box>
                    </TechCard>

                    <TechCard bg="brand.secondary" mr={10} mt={-150} p={5}>
                        <Flex pb={20} justify="space-between" color="white">
                            <Heading>Backend</Heading>
                            <BsDisplay size={50}/>
                        </Flex>
                        <Box>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">Go</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">Python</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">C++</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">NodeJS</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">ELPS</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">gRPC</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">PHP</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">Perl</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">PostgreSQL</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">Django</Tag>
                        </Box>
                    </TechCard>

                    <TechCard bg="brand.secondary" mr={10} mt={-150} p={5}>
                        <Flex pb={20} justify="space-between" color="white">
                            <Heading>Infrastructure</Heading>
                            <BsDisplay size={50}/>
                        </Flex>
                        <Box>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">Terraform</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">AWS</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">GCP</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">Kubernetes</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">Docker</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">Helm</Tag>
                            <Tag mx={1} my={2} borderRadius="full" size="lg">CI/CD</Tag>
                        </Box>
                    </TechCard>

                </Flex>

                <Box pt="5" color="white" maxW="1140px" mx="auto">
                    <Heading as="h2" py="10">Projects</Heading>
                    <Flex py="50">
                        <Image src={lispExtensionScreenshot} w="45%" objectFit="cover" align="0 100%"/>
                        <Spacer/>
                        <Box w="45%">
                            <Heading as="h3">ELPS VSCode Extension</Heading>
                            <br/>
                            <Text>
                                I was an early adopter of a new programming language called ELPS
                                <br/><br/>
                                To help myself and my team write code in this language I created an extension to
                                syntax
                                highlight our code.

                                <br/><br/>
                                Read more about this project →
                            </Text>
                        </Box>
                    </Flex>

                    <Flex pt="100">
                        <Box w="45%">
                            <Heading as="h3">Pedestrian Tracker</Heading>
                            <br/>

                            <Text>
                                For my third-year project at Cambridge, I created a pedestrian detectorand tracker for
                                CCTV footage.
                                <br/><br/>
                                My aim was to use a mixture of advanced image processing algorithms and
                                classical machine learning techniques to build a super-efficient tracker with high
                                accuracy.
                                <br/><br/>
                                I wrote this application in C++, using the OpenCV library as well as QT QML to
                                create a native GUI.
                            </Text>
                        </Box>
                        <Spacer/>
                        <Image src={pedestrianTracker} w="45%" objectFit="cover" align="75% 0"/>
                    </Flex>
                </Box>

                <Flex>
                    <footer>
                        Icons
                        <Link href="#"
                              target="_blank"
                              rel="noopener noreferrer">View source on Github →</Link>
                    </footer>
                </Flex>
            </Box>
        </ChakraProvider>
    );
}

export default App;

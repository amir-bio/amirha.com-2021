import React from 'react';
import me from './media/me.png'
import lispExtensionScreenshot from './media/lispExtensionScreenshot.png'
import pedestrianTracker from './media/pedestrianTracker.png'
import CustomGearIcon from './media/CustomGearIcon.svg'
import CustomPuzzleIcon from './media/CustomPuzzleIcon.svg'
import SiteSkeleton from './media/siteSkeleton.png'
import { mode } from "@chakra-ui/theme-tools"
import { RiGithubFill, RiGitlabFill, RiLinkedinFill } from 'react-icons/ri'
import { BsDisplay } from 'react-icons/bs'
import {
    Box,
    BoxProps,
    Center,
    CenterProps,
    ChakraProvider,
    extendTheme,
    Flex,
    Heading,
    Image,
    Link,
    LinkProps,
    Spacer,
    Tag,
    Text
} from "@chakra-ui/react"

const colors = {
    brand: {
        primary: "#102A4C",
        secondary: "#7755CC",
        action: {
            light: "#3FDFE9",
            dark: "#102A4C",
        },
    },
}
// Version 2: Using functions
const theme = extendTheme({
    colors,
    styles: {
        global: (props) => ({
            body: {
                fontFamily: "body", // TODO: make font Robot
                bg: mode("brand.primary", "gray.800")(props),
            },
        }),
    },
})

const TechCard = (props: BoxProps) => (
    <Box

        w={{base: 0.7, md: 0.6, lg: 1 / 3}}
        mt={{base: 10, lg: -150}}
        mx={{base: "auto", lg: 3}}
        sx={{
            bg: "brand.secondary",
            p: 5,
            borderRadius: "lg",
            color: "white",
            transition: "all .4s ease-in-out",

            ":hover": {
                transform: "translateY(-20px);",
                transition: "all .4s ease-in-out",

            }
        }}
        {...props}

    >
        {props.children}
    </Box>
)
const LightLink = ({noUnderline = false, ...props}: LinkProps & { noUnderline?: boolean }) => (
    <Link
        sx={{
            color: "brand.action.light",
            textDecoration: noUnderline ? "none" : "underline",
        }}
        rel="noopener"
        {...props}
    >
        {props.children}
    </Link>
)

const DarkLink = (props: LinkProps) => (
    <Link
        sx={{
            color: "brand.action.dark",
            textDecoration: "underline",
        }}
        {...props}
    >
        {props.children}
    </Link>
)

const SocialIcons = (props: CenterProps) => (
    <Center
        {...props}
        px="10"
        sx={{
            color: "white",
            "& :hover": {color: "brand.action.light"}
        }}
    >
        <Box mx="4">
            <a href="https://www.linkedin.com/in/amirhossein-andohkosh/" rel="noopener noreferrer"
               target="_blank">
                <RiLinkedinFill size={25}/>
            </a>
        </Box>
        <Box mx="4">
            <a href="https://github.com/amirha97" rel="noopener noreferrer" target="_blank">
                <RiGithubFill size={25}/>
            </a>
        </Box>
        <Box mx="4">
            <a href="https://gitlab.com/amirH.A" rel="noopener noreferrer" target="_blank">
                <RiGitlabFill size={25}/>
            </a>
        </Box>
    </Center>
)

type ProjectSectionProps = {
    imageSrc: string;
    heading: string;
    reverseOrder: boolean; // reverse the order of image and text section
    children: React.ReactNode;
}
const ProjectSection = ({imageSrc, heading, reverseOrder, children}: ProjectSectionProps) => (
    <Flex py="50" direction={{base: "column", lg: reverseOrder ? "row-reverse" : "row"}} align="center">
        <Image src={imageSrc} w={{base: "100%", lg: "45%"}} objectFit="cover"
               align="0 100%"/>
        <Spacer/>
        <Box w={{base: "100%", lg: "45%"}} pt={{base: 10, lg: 0}}>
            <Heading as="h3" size="lg">{heading}</Heading>
            <br/>
            <Text>
                {children}
            </Text>
        </Box>
    </Flex>
)

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Box>
                <Box bg="brand.primary" color="white" px="10">
                    {/* display={{lg: "flex"}} Changes the Display to a flex at and after a large breakpoint
                    - causes children to stack vertically at sizes below it*/}
                    <Box display={{lg: "flex"}} maxW="1140px" mx="auto" pt={50}>
                        <Box
                            py={{base: 5, lg: 100}}
                            pr={{base: 5, lg: 100}}
                            textAlign={{base: "center", lg: "left"}}
                        >
                            <Heading as="h1">Hey 👋, I’m Amirhossein Andohkosh</Heading>
                            <Text as="h3" pt="30" fontSize="18">Senior Software Engineer at
                                {' '}
                                <LightLink href="https://upsidetechnology.co/">
                                    Upside Technologies.
                                </LightLink>
                            </Text>
                        </Box>
                        <Box>
                            <Image
                                mx={{base: "auto", lg: 0}}
                                mb={{base: 10, lg: 0}}
                                borderRadius="full"
                                objectFit="cover"
                                align="75% 20%"
                                boxSize="300px"
                                src={me}
                                alt="Amirhossein Andohkosh"
                            />
                        </Box>
                    </Box>


                    <SocialIcons/>

                </Box>

                <Box bg="white" my="10" pt="10" pb="150" px="10" w="100%">
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
                            <DarkLink>My story → </DarkLink>
                        </Text>
                    </Box>
                </Box>

                <Flex direction={{base: "column", lg: "row"}} maxW="1140px" mx="auto">
                    <TechCard>
                        <Flex pb={20} justify="space-between">
                            <Heading as="h3" size="lg">Frontend</Heading>
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

                    <TechCard>
                        <Flex pb={20} justify="space-between">
                            <Heading as="h3" size="lg">Backend</Heading>
                            <Image src={CustomGearIcon} width="70px"/>
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

                    <TechCard>
                        <Flex pb={20} justify="space-between">
                            <Heading as="h3" size="lg">Infrastructure</Heading>
                            <Image src={CustomPuzzleIcon} width="70px"/>
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
                <Box px="10">
                    <Box pt="5" color="white" maxW="1140px" mx="auto">
                        <Heading as="h2" py="10">Projects</Heading>
                        <ProjectSection
                            heading="ELPS VSCode Extension"
                            imageSrc={lispExtensionScreenshot}
                            reverseOrder={false}
                        >
                            I was an early adopter of a new programming language called
                            {'  '}
                            <LightLink
                                href="https://github.com/luthersystems/elps"
                                target="_blank"
                                noUnderline={true}
                            >
                                ELPS.
                            </LightLink>
                            {'    '}
                            <br/><br/>
                            To help myself and my team write code in this language I created an extension to
                            syntax
                            highlight our code.

                            <br/><br/>
                            <LightLink>Read more about this project → </LightLink>
                        </ProjectSection>

                        <ProjectSection
                            heading="Pedestrian Tracker"
                            imageSrc={pedestrianTracker}
                            reverseOrder={true}>
                            For my third-year project at Cambridge, I created a pedestrian detector and tracker for
                            CCTV footage.
                            <br/><br/>
                            My aim was to use a mixture of advanced image processing algorithms and
                            classical machine learning techniques to build a super-efficient tracker with high
                            accuracy.
                            <br/><br/>
                            I wrote this application in <b>C++</b>, using the
                            {'  '}<LightLink href="https://opencv.org/" target="_blank"
                                             noUnderline={true}>OpenCV</LightLink>{'    '}
                            library as well as
                            {'  '}<LightLink href="https://en.wikipedia.org/wiki/QML" target="_blank"
                                             noUnderline={true}>QT QML</LightLink>{'    '}
                            to
                            create a native GUI.
                        </ProjectSection>

                        <ProjectSection
                            heading="Retail Startup Automator"
                            imageSrc={SiteSkeleton}
                            reverseOrder={false}
                        >
                            My second-year group project at university was a piece of software that automated creation
                            of
                            retail websites.
                            <br/><br/>
                            This project consisted of a <b>Crawler and Scraper</b> for popular retail websites
                            such as eBay and Amazon, and a <b>NLP/Machine Learning</b> component that determined which
                            parts
                            of
                            the data are actual relevant to the product. The final component was a <b>CMS/Website
                            Generation </b>
                            component that made complete ready to use websites, with pages for each product.
                            <br/><br/>
                            All that's needed as input is a single keyword to automatically create a full retail
                            website! 🚀

                        </ProjectSection>

                    </Box>
                </Box>

                <Box pt={20} pb={5} textAlign="center">
                    <Center>
                        <footer>
                            <SocialIcons pb={5}/>

                            <LightLink
                                fontSize="12"
                                href="https://github.com/amirha97/amirha.com-2021"
                                target="_blank"
                            >
                                View source of this site on Github
                            </LightLink>
                        </footer>
                    </Center>
                </Box>
            </Box>
        </ChakraProvider>
    );
}

export default App;

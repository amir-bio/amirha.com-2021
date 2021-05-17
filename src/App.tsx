import React from 'react';
import me from './media/me.webp'
import lispExtensionScreenshotCropped from './media/lispExtensionScreenshotCropped.webp'
import githubActionsStatVisualiser from './media/githubActionsStatVisualiser.webp'
import pedestrianTracker from './media/pedestrianTracker.webp'
import CustomGearIcon from './media/CustomGearIcon.svg'
import CustomPuzzleIcon from './media/CustomPuzzleIcon.svg'
import SiteSkeleton from './media/siteSkeleton.svg'
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
import ReactGA from 'react-ga';

ReactGA.initialize("UA-41904377-2")
ReactGA.pageview(window.location.pathname + window.location.search);

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
                fontFamily: "body",
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
    imageAlt: string;
    heading: string;
    reverseOrder: boolean; // reverse the order of image and text section
    children: React.ReactNode;
}
const ProjectSection = ({imageSrc, imageAlt, heading, reverseOrder, children}: ProjectSectionProps) => (
    <Flex py="50" direction={{base: "column", lg: reverseOrder ? "row-reverse" : "row"}} align="center">
        <Image src={imageSrc} w={{base: "100%", lg: "45%"}} objectFit="cover"
               align="0 100%" alt={imageAlt}/>
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

const Tags = ({items}: { items: String[] }) => (
    <>
        {items.map(tag => <Tag mx={1} my={2} borderRadius="full" size="lg">{tag}</Tag>)}
    </>
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
                            <Text as="h2" pt="30" fontSize="18">Senior Software Engineer at
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
                            Prior to Upside I worked at Acre as a Senior Backend Engineer and as a Computer Scientist at
                            Netcraft before that.
                            <br/>
                            <br/>
                            {/* TODO: Enable this section after writing new page */}
                            {/*<DarkLink>My story → </DarkLink>*/}
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
                            <Tags items={[
                                "React",
                                "TypeScript",
                                "JSS",
                                "Webpack",
                                "Cypress",
                                "GraphQL",
                                "Storybook",
                                "jQuery",
                            ]}/>
                        </Box>
                    </TechCard>

                    <TechCard>
                        <Flex pb={20} justify="space-between">
                            <Heading as="h3" size="lg">Backend</Heading>
                            <Image alt="Gear icon" src={CustomGearIcon} width="70px"/>
                        </Flex>
                        <Box>
                            <Tags items={[
                                "Go",
                                "Python",
                                "C++",
                                "NodeJS",
                                "ELPS",
                                "PHP",
                                "Perl",
                                "REST",
                                "gRPC",
                                "PostgreSQL",
                                "Django",
                            ]}/>
                        </Box>
                    </TechCard>

                    <TechCard>
                        <Flex pb={20} justify="space-between">
                            <Heading as="h3" size="lg">Infrastructure</Heading>
                            <Image alt="Puzzle icon" src={CustomPuzzleIcon} width="70px"/>
                        </Flex>
                        <Box>
                            <Tags items={[
                                "Terraform",
                                "AWS",
                                "GCP",
                                "Kubernetes",
                                "Docker",
                                "Helm",
                                "CI/CD",
                            ]}/>
                        </Box>
                    </TechCard>

                </Flex>
                <Box px="10">
                    <Box pt="5" color="white" maxW="1140px" mx="auto">
                        <Heading as="h2" py="10">Projects</Heading>
                        <ProjectSection
                            heading="Github Actions Stat Visualiser"
                            imageSrc={githubActionsStatVisualiser}
                            imageAlt="Screenshot of Github Actions Stat Visualiser in action"
                            reverseOrder={false}
                        >
                            Nowadays many software companies use CI/CD as a critical part of their deelopment flow to
                            test, build and deploy their products.
                            <br/><br/>
                            It's crucial for these pipelines to be fast enough to allow teams to test and release their
                            product as quickly as needed. Github Actions is one of the most popular
                            CI/CD pipeline system, however there are no tools to analyse the workflows to understand
                            bottlenecks and aid with optimising and assessing changes made to the pipeline, until now...
                            <br/><br/>
                            I've created
                            {'  '}
                            <LightLink
                                href="https://github.com/amirha97/github-actions-stats"
                                target="_blank"
                                noUnderline={true}
                            >
                                Github Actions Stat Visualiser
                            </LightLink>
                            {'    '} to address these gaps and have used it successfully in production for optimisation
                            and monitoring purposes!
                            <br/><br/>
                        </ProjectSection>

                        <ProjectSection
                            heading="ELPS VSCode Extension"
                            imageSrc={lispExtensionScreenshotCropped}
                            imageAlt="Screenshot of ELPS syntax highlighter in action"
                            reverseOrder={true}
                        >
                            I'm an early adopter of
                            {'  '}
                            <LightLink
                                href="https://github.com/luthersystems/elps"
                                target="_blank"
                                noUnderline={true}
                            >
                                ELPS,
                            </LightLink>
                            {' '} a new programming language guaranteed to be deterministic, purpose built for
                            writing blockchain smart contracts.
                            <br/><br/>
                            To help myself and my team write and read ELPS code with ease I created a
                            <LightLink
                                href="https://marketplace.visualstudio.com/items?itemName=AmirHA.elps"
                                target="_blank"
                                noUnderline={true}
                            >{' '} VSCode extension{' '}</LightLink>
                            to syntax highlight our code.

                            <br/><br/>
                            {/* TODO: Enable link after writing blog post*/}
                            {/*<LightLink>Read more about this project → </LightLink>*/}
                        </ProjectSection>

                        <ProjectSection
                            heading="Pedestrian Tracker"
                            imageSrc={pedestrianTracker}
                            imageAlt="Screenshot of Pedestrian detection generated frames"
                            reverseOrder={false}>
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
                            imageAlt="Website skeleton image"
                            reverseOrder={true}
                        >
                            My second-year group project at Cambridge was a piece of software that automated creation
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
                            All that's needed to automatically create a large retail website is a single keyword! 🚀

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

export { App };

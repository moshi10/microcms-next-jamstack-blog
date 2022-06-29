import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { Blog } from "../types/types";
import Moment from "react-moment"
import NextLink from "next/link"

type Props = {
    blogs: Blog[]
}


const ArticleCard: React.FC<Props> = ({ blogs }) => {


    return (
        <Stack display={"column"} spacing="5">

            {blogs.map((blog) => (
                <Box key={blog.id}>
                    <NextLink href={`/blogs/${blog.id}`}>
                        <Button as="a">
                            <Heading>{blog.title}</Heading>
                            <Moment format="YYYY/MM/DD">
                                {blog.publishedAt}
                            </Moment>
                        </Button>
                    </NextLink>
                </Box>
            ))}

        </Stack>
    )
}

export default ArticleCard

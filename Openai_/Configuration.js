const Configuration = () => {
    const [image, updateImage] = useState();
    const [prompt, updatePrompt] = useState();
    const [loading, updateLoading] = useState();
  
    const apiKey = async (prompt) => {
      updateLoading(true);
      const result = await axios.get(`https://pixelflare-123-bakend.onrender.com/api/v1`);
      updateImage(result.data);
      updateLoading(false);
    };
  
    return (
      <ChakraProvider>
        <Container>
  
          <Wrap marginBottom={"10px"}>
            <Input
              value={prompt}
              onChange={(e) => updatePrompt(e.target.value)}
              width={"350px"}
            ></Input>
            <Button onClick={(e) => apiKey(prompt)} colorScheme={"yellow"}>
              Generate
            </Button>
          </Wrap>
  
          {loading ? (
            <Stack>
              <SkeletonCircle />
              <SkeletonText />
            </Stack>
          ) : image ? (
            <Image src={`data:image/png;base64,${image}`} boxShadow="lg" />
          ) : null}
        </Container>
      </ChakraProvider>
    );
  };
  
  export default Configuration;
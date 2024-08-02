import {
  Badge,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
const RecipePage = ({ details, setView }) => {
  console.log("details===>>>", details);
  return (
    <div style={{ padding: "10px" }}>
      <Button
        colorScheme="blue"
        onClick={() => setView("recipeList")}
        style={{ margin: "5px" }}
      >
        All Recipe
      </Button>

      <div>
        <Image
          src={details?.image}
          style={{ width: "100%", height: "40vh" }}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
          gap={4}
          style={{ marginTop: "20px" }}
        >
          <GridItem>
            <Heading size="xl ">{details?.label}</Heading>

            <div>
              {details?.mealType.map((item, index) => (
                <Badge
                  key={index}
                  colorScheme="purple"
                  style={{ marginRight: "5px" }}
                >
                  {item}
                </Badge>
              ))}
            </div>
            <div>
              {details?.dishType.map((item, index) => (
                <Badge
                  key={index}
                  colorScheme="blue"
                  variant="outline"
                  style={{ marginRight: "5px" }}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </GridItem>
          <GridItem>
            <SimpleGrid columns={2} spacing={8}>
              <GridItem>
                <h2>Health Labels:</h2>
                {details?.healthLabels.map((item, index) => (
                  <Badge
                    key={index}
                    colorScheme="purple"
                    style={{ marginRight: "5px" }}
                  >
                    {item}
                  </Badge>
                ))}
                <div>
                  <div>
                    <h2>Diet:</h2>
                    {details?.dietLabels?.length > 0
                      ? details?.dietLabels.map((item, index) => (
                          <Badge
                            key={index}
                            colorScheme="green"
                            style={{ marginRight: "5px" }}
                          >
                            {item}
                          </Badge>
                        ))
                      : ""}
                  </div>
                  <div>
                    <h2>Cautions:</h2>
                    {details?.cautions?.length > 0
                      ? details?.cautions.map((item, index) => (
                          <Badge
                            key={index}
                            colorScheme="red"
                            style={{ marginRight: "5px" }}
                          >
                            {item}
                          </Badge>
                        ))
                      : "N/A"}
                  </div>
                </div>
              </GridItem>
            </SimpleGrid>
          </GridItem>
        </Grid>
      </div>
    </div>
  );
};

export default RecipePage;

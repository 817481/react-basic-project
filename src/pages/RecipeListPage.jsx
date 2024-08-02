import {
  Badge,
  Card,
  CardBody,
  Divider,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { data } from "../utils/data";
import RecipePage from "./RecipePage ";

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState("recipeList");
  const [details, setDetails] = useState({});
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRecipes = data.hits.filter((hit) =>
    hit.recipe.label.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSingleCardShow = (value) => {
    setView("recipePage");
    setDetails(value?.recipe);
  };
  return (
    <>
      {view == "recipeList" ? (
        <div style={{ padding: "10px" }}>
          <Heading
            style={{
              textAlign: "center",
              padding: "10px",
              background: "#1A202C",
              color: "white",
            }}
          >
            Winc Recipe Checker
          </Heading>
          <Flex
            alignItems="center"
            justifyContent="center"
            style={{ background: "#1A202C" }}
          >
            <FormControl padding="10px" width="80vh" textAlign="center">
              <Input
                style={{ background: "white" }}
                type="text"
                onChange={handleInputChange}
                placeholder="Search with recipe name"
              />
            </FormControl>
          </Flex>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
            justifyContent="center"
            alignItems="center"
          >
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map((item, index) => (
                <div key={index} onClick={() => handleSingleCardShow(item)}>
                  <Card maxW="xl" style={{ maxHeight: "80vh" }}>
                    <CardBody>
                      <Image
                        src={item?.recipe?.image}
                        style={{ width: "450px", height: "300px" }}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                      />

                      <Heading size="md" style={{ height: "5vh" }}>
                        {item?.recipe?.label}
                      </Heading>
                      <Stack
                        direction="row"
                        style={{ height: "2vh", marginBottom: "10px" }}
                      >
                        {item?.recipe?.dietLabels?.length > 0
                          ? item?.recipe?.dietLabels.map((item, index) => (
                              <Badge key={index} colorScheme="green">
                                {item}
                              </Badge>
                            ))
                          : ""}
                      </Stack>
                      <Stack
                        direction="row"
                        style={{ height: "2vh", marginBottom: "10px" }}
                      >
                        {" "}
                        {item?.recipe?.cautions?.length > 0
                          ? item?.recipe?.cautions.map((item, index) => (
                              <Badge key={index} colorScheme="red">
                                {item}
                              </Badge>
                            ))
                          : "N/A"}
                      </Stack>
                      <Stack
                        direction="row"
                        style={{ height: "2vh", marginBottom: "10px" }}
                      >
                        {item?.recipe?.mealType.map((item, index) => (
                          <Badge key={index} colorScheme="purple">
                            {item}
                          </Badge>
                        ))}
                      </Stack>
                      <Stack direction="row" style={{ height: "2vh" }}>
                        {item?.recipe?.dishType.map((item, index) => (
                          <Badge
                            key={index}
                            colorScheme="blue"
                            variant="outline"
                          >
                            {item}
                          </Badge>
                        ))}
                      </Stack>
                    </CardBody>
                    <Divider />
                  </Card>
                </div>
              ))
            ) : (
              <p>No recipes found</p>
            )}
          </SimpleGrid>
        </div>
      ) : (
        <RecipePage details={details} setView={setView} />
      )}
    </>
  );
};

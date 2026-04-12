import { Center, Heading, Input, SimpleGrid, Box, Image, Text } from '@chakra-ui/react';
import { data } from '../utils/data';
import { useState } from 'react'; 
import { RecipePage } from './RecipePage.jsx';


export const RecipeListPage = () => {
    // You can play around with the console log,
    // but ultimately remove it once you are done
const [search, setSearch] = useState("");
const [selectedRecipe, setSelectedRecipe] = useState();
   
const filteredRecipes = data.hits.filter((hit) => {
    const searchValue = search.toLowerCase().replace(/-/g, " ").trim();
    const matchesName = hit.recipe.label.toLowerCase().includes(searchValue);
    const matchesHealthLabel = hit.recipe.healthLabels.some((label) =>
        label.toLowerCase().replace(/-/g, " ").includes(searchValue)
);



return matchesName || matchesHealthLabel;
});

if (selectedRecipe) {
    return (
        <RecipePage recipe={selectedRecipe}
        onBackClick={() => setSelectedRecipe(null)} 
        />
    );
}

    return (
        <Center minH="100vh" flexDir="column" bg={{ base: "blue.400", _dark: "black"}} px={{ base: 4, md:8 }}>
            <Heading>Your Recipe App</Heading>
               <Input value={search} onChange={(e) => setSearch(e.target.value)} maxW="400px" placeholder="Search" _placeholder={{ fontWeight: "bold" }} mb={4} />   
               
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={16} w="100%" maxW="1200px">

            {filteredRecipes.map((hit) => {
                return (

            <Box 
            key={hit.recipe.label} onClick={() => setSelectedRecipe(hit.recipe)}   
            p={4}
            borderWidth="1px"
            bg="white"
            color="black"
            borderRadius="xl"
            boxShadow="sm"
            >

            <Text>{hit.recipe.label}</Text>           
            <Image
            src = {hit.recipe.image} 
            alt={hit.recipe.label} 
            w="100%"
            h="200px"
            objectFit="cover"
            borderRadius="md"
            /> 
            {hit.recipe.dietLabels.length > 0 && <Text>{hit.recipe.dietLabels}</Text>}
            {hit.recipe.healthLabels.includes('Vegetarian') && <Text>Vegetarian</Text>}
            {hit.recipe.healthLabels.includes('Vegan') && <Text>Vegan</Text>}
            <Text>{hit.recipe.mealType}</Text>
            <Text>{hit.recipe.dishType}</Text>
            {hit.recipe.cautions.length > 0 && <Text>{hit.recipe.cautions}</Text>}
            
             </Box>
            );
        })}
        </SimpleGrid>
        </Center>
    );
};

//console.log(data);
//onsole.log(data.hits);
//console.log(data.hits[0].recipe.labels);
//console.log(data.hits[0].recipe.label);


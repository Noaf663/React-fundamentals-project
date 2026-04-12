import { Center, Heading, Input, SimpleGrid, Box, Image, Text } from '@chakra-ui/react';
import { useState } from 'react'; 


export const RecipeListPage = ({ recipes, onSelectRecipe }) => {
   
const [search, setSearch] = useState("");
   
const filteredRecipes = (recipes ?? []).filter((hit) => {
    const searchValue = search.toLowerCase().replace(/-/g, " ").trim();
    const matchesName = hit.recipe.label.toLowerCase().includes(searchValue);

    const matchesHealthLabel = (hit.recipe.healthLabels ?? []).some((label) =>
        label.toLowerCase().replace(/-/g, " ").includes(searchValue)
);
return matchesName || matchesHealthLabel;
});



    return (
        <Center minH="100vh" flexDir="column" justifyContent="flex-start" pt={8} px={{ base: 4, md:8 }}>
            <Heading>Your Recipe App</Heading>
               <Input value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                maxW="400px" 
                placeholder="Search" 
                bg="white"
                color="black"
                bodyColor="gray.300"
                _placeholder={{ color: "gray.500", fontWeight: "bold" }} 
                mb={4} />   
               
            <SimpleGrid 
            columns={{ base: 1, sm: 2, md: 3 }} 
            gap={10}
            w="100%" 
            maxW="1200px" 
            mt={8}>

            {filteredRecipes.map((hit) => {
                return (

            <Box 
            key={hit.recipe.label} onClick={() => onSelectRecipe(hit.recipe)}   
            p={4}
            borderWidth="1px"
            bg="white"
            color="black"
            borderRadius="xl"
            boxShadow="sm"
            cursor="pointer"
            transition="0.2s"
            _hover={{
                transform: "scale(1.02)",
                boxShadow: "md",
            }}
            >

            <Text fontWeight="bold" mb={2}>
                {hit.recipe.label}
            </Text>           
            <Image
            src = {hit.recipe.image} 
            alt={hit.recipe.label} 
            w="100%"
            h="200px"
            objectFit="cover"
            borderRadius="md"
            mb={3}
            /> 
            {hit.recipe.dietLabels.length > 0 && (
                <Text mb={1}>{hit.recipe.dietLabels.join(", ")}</Text>
            )}
            {hit.recipe.healthLabels.includes('Vegetarian') && <Text mb={1}>Vegetarian</Text>}
            {hit.recipe.healthLabels.includes('Vegan') && <Text mb={1}>Vegan</Text>}
            <Text mb={1}>{hit.recipe.mealType}</Text>
            <Text mb={1}>{hit.recipe.dishType}</Text>
            {hit.recipe.cautions.length > 0 && <Text>{hit.recipe.cautions}</Text>}
            
             </Box>
            );
        })}
        </SimpleGrid>
        </Center>
    );
};

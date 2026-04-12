import { useEffect } from 'react';
import { Text, Image, Button, Heading, Box } from '@chakra-ui/react';

export const RecipePage = ({ recipe, onBackClick }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

return (
<Box px={{ base: 4, md: 8 }} py={6} maxW="800px" mx="auto">
    <Button onClick={onBackClick}>Back</Button>
    <Heading mb={4}>{recipe.label}</Heading>
    <Image 
    src={recipe.image} 
    alt={recipe.label} 
    w="100%"
    maxW="500px"
    h="300px"
    objectFit="cover"
    mb={4}
    />
    <Heading size="md" mb={3}>Recipe details</Heading>
    <Text mb={2}>Meal type: {recipe.mealType.join(", ")}</Text>
    <Text mb={2}>Dish type: {recipe.dishType.join(", ")}</Text>
    <Text mb={2}>Total cooking time: {recipe.totalTime > 0 ? recipe.totalTime : "N/A"}</Text>


    <Heading size="md" mb={3}>Labels</Heading>
    <Text mb={2}>Health Labels: {recipe.healthLabels.join(", ")}</Text>
    {recipe.dietLabels.length > 0 && (<Text mb={2}>Diet Labels: {recipe.dietLabels.join(", ")}</Text>
    )}
    {recipe.cautions.length > 0 && (
    <Text mb={2}>Cautions: {recipe.cautions.join(", ")}</Text>)}

    <Heading size="md" mb={3}>Ingredients</Heading>
    <Text mb={4}>Ingredients: {recipe.ingredientLines.join(", ")}</Text>

    <Heading size="md" mb={3}>Nutrition</Heading>
    <Text mb={2}>Servings: {recipe.yield}</Text>
    <Text mb={2}>Energy: {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)} kcal</Text>
    <Text mb={2}>Protein: {Math.round(recipe.totalNutrients.PROCNT.quantity)} g</Text>
    <Text mb={2}>Fat: {Math.round(recipe.totalNutrients.FAT.quantity)} g</Text>
    <Text mb={2}>Carbs: {Math.round(recipe.totalNutrients.CHOCDF.quantity)} g</Text>
    <Text mb={2}>Cholesterol: {Math.round(recipe.totalNutrients.CHOLE.quantity)} mg</Text>
    <Text mb={2}>Sodium: {Math.round(recipe.totalNutrients.NA.quantity)} mg</Text>
</Box>
);
};

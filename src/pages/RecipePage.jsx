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
    <Text>Meal type: {recipe.mealType.join(", ")}</Text>
    <Text>Dish type: {recipe.dishType.join(", ")}</Text>
    <Text>Total cooking time: {recipe.totalTime > 0 ? recipe.totalTime : "N/A"}</Text>
    {recipe.dietLabels.length > 0 && (<Text>Diet Labels: {recipe.dietLabels.join(", ")}</Text>
    )}
    <Text>Health Labels: {recipe.healthLabels.join(", ")}</Text>
    {recipe.cautions.length > 0 && (
    <Text>Cautions: {recipe.cautions.join(", ")}</Text>)}
    <Text>Ingredients: {recipe.ingredientLines.join(", ")}</Text>
    <Text>Servings: {recipe.yield}</Text>
    <Text>Energy: {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)} kcal</Text>
    <Text>Protein: {Math.round(recipe.totalNutrients.PROCNT.quantity)} g</Text>
    <Text>Fat: {Math.round(recipe.totalNutrients.FAT.quantity)} g</Text>
    <Text>Carbs: {Math.round(recipe.totalNutrients.CHOCDF.quantity)} g</Text>
    <Text>Cholesterol: {Math.round(recipe.totalNutrients.CHOLE.quantity)} mg</Text>
    <Text>Sodium: {Math.round(recipe.totalNutrients.NA.quantity)} mg</Text>
</Box>
);
};
    
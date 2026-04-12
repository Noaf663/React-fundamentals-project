import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
import { useState } from 'react';
import { Box } from '@chakra-ui/react'
import { ColorModeButton } from './components/ui/color-mode';

export const App = () => {
    // Your state code here
const [selectedRecipe, setSelectedRecipe] = useState(null);


if (selectedRecipe) {
    return (
        <RecipePage recipe={selectedRecipe}
        onBackClick={() => setSelectedRecipe(null)} 
        />
    );
}

//const [userChose, setUserChose] = useState(true);
//return <div>{data.hits[0].recipe.label}</div>;
return (
   <Box minH="100vh" bg="bg.canvas">
    <ColorModeButton />
    <RecipeListPage onSelectRecipe={setSelectedRecipe} />
    </Box>
    
);
};

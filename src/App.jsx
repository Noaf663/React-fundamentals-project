import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
import { useState } from 'react';
import { Box } from '@chakra-ui/react'
import { ColorModeButton } from './components/ui/color-mode';
import { data } from './utils/data';

export const App = () => {
const [selectedRecipe, setSelectedRecipe] = useState(null);


return (
   <Box minH="100vh" bg="bg.canvas">
    <ColorModeButton />

    {selectedRecipe ? (
        <RecipePage
        recipe={selectedRecipe}
        onBackClick={() => setSelectedRecipe(null)}
    />
    ) : (
        <RecipeListPage
          recipes={data.hits}
          onSelectRecipe={setSelectedRecipe}
   />

    )}
    </Box>
    
);
};
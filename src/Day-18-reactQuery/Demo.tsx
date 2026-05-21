import { useState } from "react";
import { Button, Card, Image, Text } from "@mantine/core";
import { useProduct } from "./useProducts";

const RandomProductDemo = () => {
    const [id, setId] = useState(1);
    const { data, isLoading, isError } = useProduct(id);

    const getRandomProduct = () => {
        setId(Math.floor(Math.random() * 30) + 1);
    };

    if (isLoading) {
        return <Text>Loading...</Text>;
    }
    if (isError) {
        return <Text c="red">Something went wrong.</Text>;

    }
    return (
        <Card withBorder padding="md">
            <Image src={data.thumbnail} height={160} alt={data.title} />

            <Text fw={700} mt="md">
                {data.title}
            </Text>

            <Text c="blue">${data.price}</Text>

            <Button mt="md" onClick={getRandomProduct}>
                Show Random Product
            </Button>
        </Card>
    );
};

export default RandomProductDemo;
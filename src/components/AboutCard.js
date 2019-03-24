import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const CardExampleCard = () => (
    <Card>
        <Image src='/img/logo.jpg' />
        <Card.Content>
            <Card.Header>Vault</Card.Header>
            <Card.Meta>
                <span className='date'>v0.11</span>
            </Card.Meta>
            <Card.Description>A shared distributed and redundant storage solution</Card.Description>
        </Card.Content>
    </Card>
);

export default CardExampleCard;

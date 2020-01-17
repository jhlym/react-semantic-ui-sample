import React from "react";

import styled from "styled-components";
import { Grid, Image } from "semantic-ui-react";

const Column = styled(Grid.Column)`
  margin-bottom: 20px;
`;

const GridSample1 = () => {
  return (
    <Grid columns={16}>
      <Grid.Row>
        <Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Column>
        <Grid.Column width={3} style={{ marginBottom: "10px" }}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default GridSample1;

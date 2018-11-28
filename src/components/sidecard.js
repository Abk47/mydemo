import React, { Fragment } from 'react';

import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';

const BANNER = 'https://avatars.mds.yandex.net/get-pdb/1245924/1d5810db-d268-420a-848d-dd053bf0acd2/orig';

const SideCard = () => (

<Fragment>
  
  <UncontrolledAlert color="danger" className="d-none d-lg-block">
    <strong>Account not activated.</strong>
  </UncontrolledAlert>
  
  <Card>
    <CardImg top width="100%" src={BANNER} alt="banner" />
    <CardBody>
      <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">The Lord Of Thunder</CardTitle>
      <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>React Developer, Mbeya</CardSubtitle>
      <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Full-stack web developer learning new hacks one day at a time. Web technology enthusiast. Hacking stuffs @Hackerthons.</CardText>
      <Button color="success" className="font-weight-bold">View Profile</Button>
    </CardBody>
  </Card>
  
</Fragment>
);

export default SideCard;

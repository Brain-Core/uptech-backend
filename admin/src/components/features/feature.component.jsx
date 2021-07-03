import React from "react";
import './Feature.css';
import {Card, CardContent, Typography} from "@material-ui/core";


function FeatureInfo({ Logo,title, total}) {
  
  return (
    <Card className="feature">
     <CardContent>
         <Typography className={`feature_title col-md-3 `}>
             <Logo/>{' '}<span className="font-weight-bold">{title}</span>
         </Typography>
         <h2 className="features__total">{total}</h2>
     </CardContent>
    </Card>
  );
}

export default FeatureInfo;

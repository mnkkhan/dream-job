import React from 'react';
import { Card, CardContent, Typography,Button } from '@mui/material';
import styled from '@emotion/styled';

type Product = {
  image: string;
  CompanyName: string;
  rating:string;
  reviews:string;
  about: string;
  //onViewJobs: () => void;
};



type dataSet = {
  product: Product;
};

/*onClick will be implimented*/
const CustomButton = styled(Button)`
background-color: #ede7f6;
color: #7e57c2;
border-radius: 20px; /* Adjust the border radius to your preference */
&:hover {
  background-color: #ede7f6; /* Maintain the same background color on hover */
}
`;

const CompanyCard: React.FC<dataSet> = ({ product }) => {
  return (
    <Card className="cursor-pointer rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.image}
          alt=""
        />
      </div>
      <CardContent>
        <Typography variant="h6" component="h3" className="font-medium text-gray-900">
          {product.CompanyName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
        <img
          className="object-cover object-top w-full h-full"
          src="https://static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.625a2323.svg"
          alt="Star_Img"
        /> {product.rating} | {product.reviews}
        </Typography>
        <Typography variant="body2" color="textSecondary">
           {product.about}
        </Typography>
        <CustomButton variant="contained" >View Jobs</CustomButton>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;




import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
function ProductCard({ image, titles, title, id, price }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="Product foots"
          className="h-[350px]  object-cover w-full "
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-myBlack text-base font-semibold "
          >
            {titles}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="text-sm font-normal text-myBlack"
          >
            {title}
          </Typography>
          <div className="flex justify-between items-center mt-[16px] mb-[20px]">
            <button className="bg-myYellow text-white w-[131px] h-[48px] text-[16px] font-[400] rounded-[6px]">
              Выбрать
            </button>
            <p className="text-base font-semibold text-myYellow">${price}</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ProductCard;
//bu componentda backentdan kelgan maluotlarni card qilib chiqarsa boladi hamma qismida bir xil kartdan foydalanganligi uchun bitta qilib ochib qoydim shundan hamma kamanda ishtirokchilari foydalansa boladi

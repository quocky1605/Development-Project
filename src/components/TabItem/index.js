// import { Fragment, useState } from "react";
// import Tab from "@mui/material/Tab";
// import { makeStyles } from "@mui/styles";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//   tab: {
//     ...theme.typography.tab,
//     minWidth: 10,
//     color: "#ffffffbf !important",
//     marginLeft: "25px !important",
//     paddingBttom: "5px !important",
//     "&.Mui-selected": {
//       color: "white !important",
//       // borderBottom: "5px solid ",
//     },
//   },
// }));

// export default function TabItem(props) {
//   const classes = useStyles();
//   const headerNav = props.items;
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Fragment>
//       {headerNav.map((route, index) => {
//         if (route.menuName) {
//           return (
//             <Tab
//               className={classes.tab}
//               label={route.name}
//               key={index}
//               aria-controls={open ? route.menuName : undefined}
//               aria-haspopup="true"
//               aria-expanded={open ? "true" : undefined}
//               onClick={handleClick}
//             />
//           );
//         } else {
//           return (
//             <Tab
//               className={classes.tab}
//               component={Link}
//               to={route?.path}
//               label={route.name}
//               key={index}
//             />
//           );
//         }
//       })}
//       {headerNav.map((route, index) => {
//         if (route.menuName && route.menuProps) {
//           return (
//             <Menu
//               id={route.menuName}
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleClose}
//               MenuListProps={{
//                 "aria-labelledby": "basic-button",
//               }}
//             >
//               {route.menuProps.map((item, index) => (
//                 <MenuItem
//                   onClick={handleClose}
//                   component={Link}
//                   to={item.path}
//                   key={index}
//                 >
//                   {item.name}
//                 </MenuItem>
//               ))}
//             </Menu>
//           );
//         }
//         return false;
//       })}
//     </Fragment>
//   );
// }

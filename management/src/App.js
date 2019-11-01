import React, { Component } from "react";
import Customer from "./components/customer";
import "./App.css";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
     root: {
          width: "100%",
          marginTop: theme.spacing.unit * 3,
          overflowX: "auto"
     },
     table: {
          minWidth: 1080
     }
});

const customers = [
     {
          id: 1,
          image: "https://placeimg.com/128/128/any",
          name: "떠돌이 방황자",
          birth: "921003",
          gender: "남자",
          job: "피리부는 거지"
     },
     {
          id: 2,
          image: "https://placeimg.com/128/128/1",
          name: "떠돌이 날치",
          birth: "940203",
          gender: "여자",
          job: "뱃사공"
     },
     {
          id: 3,
          image: "https://placeimg.com/128/128/2",
          name: "떠돌이 곰",
          birth: "930727",
          gender: "남자",
          job: "제빵사"
     }
];

class App extends Component {
     render() {
          const { classes } = this.props;
          return (
               <Paper className={classes.root}>
                    <Table className={classes.table}>
                         <TableHead>
                              <TableRow>
                                   <TableCell>번호</TableCell>
                                   <TableCell>이미지</TableCell>
                                   <TableCell>이름</TableCell>
                                   <TableCell>생년월일</TableCell>
                                   <TableCell>성별</TableCell>
                                   <TableCell>직업</TableCell>
                              </TableRow>
                         </TableHead>
                         <TableBody>
                              {customers.map(c => {
                                   return (
                                        <Customer
                                             key={c.id}
                                             id={c.id}
                                             image={c.image}
                                             name={c.name}
                                             birth={c.birth}
                                             gender={c.gender}
                                             job={c.job}
                                        />
                                   );
                              })}
                         </TableBody>
                    </Table>
               </Paper>
          );
     }
}

export default withStyles(styles)(App);

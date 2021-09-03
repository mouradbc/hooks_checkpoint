import React,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal,Button,TextField} from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 +rand();
  const left = 50+rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AddMovie({getInput}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [input, setInput] = useState({
      title:"",
      imgUrl:"",
      rate:"",
      description:""
  })
  const handleInput=(e,async)=>{
      setInput({...input,[e.target.name]:e.target.value})
      //console.log(input)
  }
  const handleAdd = (e) => {
      e.preventDefault()
      getInput(input)
      handleClose()
  }
  
 
  return (
    <div>
      <Button justify-content="center"color="black"  variant="contained" color="secondary" type="button" onClick={handleOpen}>
        add new movie
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
        <TextField type="text"name="title" placeholder="Title" onChange={handleInput}/><br/>
        <TextField type="text"name="imgUrl" placeholder="imgUrl"  onChange={handleInput}/><br/>
        <TextField type="text"name="rate" placeholder="rate"  onChange={handleInput}/><br/>
        <TextField type="text"name="description" placeholder="description"  onChange={handleInput}/><br/><br/><br/>
        <Button className="cancel-btn" variant="contained"onClick={handleClose}  color="secondary">Cancel</Button>
        <Button type="submit" onClick={handleAdd} variant="contained" color="primary">Add</Button>
       </div>
      </Modal>
    </div>
  );
}

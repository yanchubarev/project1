import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'

import { loadProfileUser, updateProfileUser } from '../modules/user';

import Grid from '@material-ui/core/grid';
import Container from '@material-ui/core/container';
import Button from '@material-ui/core/button';
import TextField from '@material-ui/core/textfield';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const card = useSelector(state => state.user.card);
  const error = useSelector(state => state.user.error);
  
  const [cardInput, setCardInput] = useState(card.cardNumber);
  const [expiresInput, setExpiresInput] = useState(card.expiryDate);
  const [holderInput, setHolderInput] = useState(card.cardName);
  const [cvcInput, setCvcInput] = useState(card.cvc);
  
  useEffect(() => {
    dispatch(loadProfileUser());
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if (cardInput && expiresInput && holderInput && cvcInput) {
      dispatch(updateProfileUser({
        cardNumber: cardInput,
        expiryDate: expiresInput,
        cardName: holderInput,
        cvc: cvcInput
      }));
    }
  };

  const handleChange = e => {
    switch (e.target.name) {
      case 'cardInput':
        setCardInput(e.target.value);
        break;
      case 'expiresInput':
        setExpiresInput(e.target.value);
        break;
      case 'holderInput':
        setHolderInput(e.target.value);
        break;
      case 'cvcInput':
        setCvcInput(e.target.value);
        break;
      default:
    }
  };

  return (
    <section className="page pageProfile">
      <div className="pageContent">
        <Container maxWidth="md">
          <div className="whiteDiv">
            <h2 className="acc">Профиль</h2>
            <p className="acc">Способ оплаты</p>
            <form onSubmit={handleSubmit} className="form">
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <div className="card">
                    <div className="line">
                      <TextField
                        label="Номер карты"
                        type="text"
                        name="cardInput"
                        value={cardInput}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="line">
                      <TextField
                        label="Срок действия"
                        type="text"
                        name="expiresInput"
                        value={expiresInput}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="card">
                    <div className="line">
                      <TextField
                        label="Имя владельца"
                        type="text"
                        name="holderInput"
                        value={holderInput}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="line">
                      <TextField
                        label="CVC"
                        type="text"
                        name="cvcInput"
                        value={cvcInput}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="line acc">
                <Button type="submit">Сохранить</Button>
              </div>
              <div className="line">
                <span className="error">{error}</span>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </section>
  );
};



export default ProfilePage;
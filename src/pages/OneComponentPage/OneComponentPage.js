import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import css from './OneComponentPage.module.css';
import { ComponentServices } from '../../services/component.services';
import commonCss from '../common/styles/CommonStyles.module.css';
import { ComputerServices } from '../../services/computer.services';
import { AddButton, SwitchComputerModal } from '../../components';
import { homeRoute } from '../../config/constants';

const OneComponentPage = () => {
  const [component, setComponent] = useState(null);
  const [computerOwner, setComputerOwner] = useState(null);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const {id} = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      ComponentServices.getById(id).then(value => setComponent(value)).catch(e => console.log(e));
    }
  }, [id]);

  useEffect(() => {
    if (component?.computerId) {
      ComputerServices.getOne(component?.computerId).then(value => setComputerOwner(value)).catch(e => console.log(e));
    }
  }, [component?.computerId]);

  const deleteComponent = () => {
    ComponentServices.delete(id).then(() => {
      navigate(`/${homeRoute}/components`);
    });
  };


  return (
    <div className={commonCss.one__comp_page}>
      {addModalOpen &&
        <SwitchComputerModal
          component={component}
          setComponent={setComponent}
          currentComputerId={component?.computerId}
          setModalOpen={setAddModalOpen}
        />
      }
      <h2 className={commonCss.computer__title}>{component?.type}</h2>
      <h4 className={commonCss.computer__subtitle}>Inventory number: {component?.inventoryNumber}</h4>
      <h4 className={commonCss.computer__subtitle}>Description: {component?.brand}</h4>
      <button onClick={deleteComponent} className={commonCss.delete__button}>
        Delete component
      </button>
      {computerOwner &&
        <div className={css.computer__link_container}>
          <h4 className={commonCss.computer__subtitle}>Component is a part of</h4>
          <Link to={`/${homeRoute}/computer/${computerOwner?.id}`}
                className={commonCss.search__by_button}>{computerOwner?.name}</Link>
        </div>
      }
      <AddButton onClick={() => setAddModalOpen(true)}
                 endTitle={component?.computerId ? 'to other computer' : 'to computer'}/>
    </div>
  );
};

export { OneComponentPage };

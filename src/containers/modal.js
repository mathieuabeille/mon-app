import React from 'react'
import Modal from 'react-modal';
import { InlineWidget } from "react-calendly";
import '../stylesheets/modal.css';



const customStyles = {
  content : {
    top                   : '50vh',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    width                 : '75vw',
    height                : '78vh',
    border                : 'none',
    background            : '#FFF',
    boxShadow: '0 0 15px rgba(0,0,0,0.2)',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function ModalNapoleon(props) {
var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }



  function closeModal(){
    setIsOpen(false);
  }

    return (
      <div>
        <div
          onClick={openModal}
        >{props.cta}
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Prendre Rendez-vous"
        >
                  <div className='btn-flat' onClick={closeModal}>Fermer</div>

          <InlineWidget
          styles={{
                height: '10000px'
                }}
          url="https://calendly.com/mathieu-abeille/30-minutes-growth-avec-mathieu-prasith" />
        </Modal>
      </div>
    );
}

export default ModalNapoleon

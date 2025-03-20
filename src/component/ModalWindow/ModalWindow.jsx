import modal from './ModalWindow.module.scss';

export  function ModalWindow({ isOpen, onClose }) {
  if (!isOpen) return null; 
  return (
    <div className={modal.modalWindow} onClick={() => onClose(false)}> 
      <div className={modal.containerModal} onClick={(e) => e.stopPropagation()}>
        <h3 className={modal.releaseh4}>
          The new release will be on sale from September 10th.
        </h3>
        <div className={modal.divBtn}>
          <button className={modal.btn3} onClick={() => onClose(false)}>OK</button>
        </div>
      </div>
    </div>
  );
}

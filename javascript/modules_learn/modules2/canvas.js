function create(id, parent, width, height) {
  let divWrapper = document.createElement('div');
  let canvasElm = document.createElement('canvas');

  parent.appendChild(divWrapper);
  divWrapper.appendChild(canvasElm);
  
  divWrapper.id = id;
  canvasElm.width = width;
  canvasElm.height = height;

  let ctx = canvasElm.getContext('2d');
  return {
    ctx: ctx,
    id: id
  }
}

function createExportList(wrapperId) {
  let ulElm = document.createElement('ul');
  ulElm.id = wrapperId + '-report';
  let canvasWrapper = document.getElementById(wrapperId);
  canvasWrapper.appendChild(ulElm);
  return ulElm.id;
}
 
export {create, createExportList};

console.log(window);

const parentBlocks = document.getElementsByClassName('parent-block');
console.log(parentBlocks);

for (const item of parentBlocks) {
    const innerBlockBtn = document.createElement('button');
    innerBlockBtn.className = 'inner-block-btn';
    console.log(innerBlockBtn);
    item.appendChild(innerBlockBtn);

    const innerBlockBtnText = document.createElement('h4');
    innerBlockBtnText.className = 'inner-block-btn-text';
    console.log(innerBlockBtnText);
    innerBlockBtn.appendChild(innerBlockBtnText);

    const innerBlockBtnTextInfo = document.createTextNode('Save');
    innerBlockBtnTextInfo.className = 'inner-block-btn-text-info';
    console.log(innerBlockBtnTextInfo);
    innerBlockBtnText.appendChild(innerBlockBtnTextInfo);
}
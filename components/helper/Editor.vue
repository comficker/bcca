<script setup lang="ts">
import Quill from "quill";

onMounted(() => {
  const editor = new Quill('#editor', {
    debug: 'info',
    modules: {
      toolbar: '#toolbar',
      // toolbar: [
      //   [{'header': 1}, {'header': 2}],
      //   ['bold', 'italic', 'underline', 'strike'],
      //   ['blockquote', 'code-block'],
      //
      //   [{'list': 'ordered'}, {'list': 'bullet'}],
      //   [{'indent': '-1'}, {'indent': '+1'}],
      //   [{'color': []}, {'background': []}],
      //   [{'font': []}],
      //   [{'align': []}],
      // ]
    },
    placeholder: 'Compose an epic...',
    readOnly: false,
    theme: 'snow'
  });
})
</script>

<template>
  <div class="">
    <div id="toolbar">
      <button class="ql-header" value="1"/>
      <button class="ql-header" value="2"/>
      <button class="ql-bold"/>
      <button class="ql-italic"/>
      <button class="ql-underline"/>
      <button class="ql-strike"/>
      <button class="ql-blockquote"/>
      <button class="ql-code-block"/>
      <button class="ql-list" value="ordered"/>
      <button class="ql-list" value="bullet"/>
      <button type="button" class="ql-indent" value="-1"/>
      <button type="button" class="ql-indent" value="1"/>
      <select class="ql-font">
        <option selected="selected"></option>
        <option value="serif"></option>
        <option value="monospace"></option>
      </select>
      <select class="ql-color">
        <option selected="selected"></option>
        <option value="#e60000"></option>
        <option value="#ff9900"></option>
        <option value="#ffff00"></option>
        <option value="#008a00"></option>
        <option value="#0066cc"></option>
        <option value="#9933ff"></option>
        <option value="#ffffff"></option>
        <option value="#facccc"></option>
        <option value="#ffebcc"></option>
        <option value="#ffffcc"></option>
        <option value="#cce8cc"></option>
        <option value="#cce0f5"></option>
        <option value="#ebd6ff"></option>
        <option value="#bbbbbb"></option>
        <option value="#f06666"></option>
        <option value="#ffc266"></option>
        <option value="#ffff66"></option>
        <option value="#66b966"></option>
        <option value="#66a3e0"></option>
        <option value="#c285ff"></option>
        <option value="#888888"></option>
        <option value="#a10000"></option>
        <option value="#b26b00"></option>
        <option value="#b2b200"></option>
        <option value="#006100"></option>
        <option value="#0047b2"></option>
        <option value="#6b24b2"></option>
        <option value="#444444"></option>
        <option value="#5c0000"></option>
        <option value="#663d00"></option>
        <option value="#666600"></option>
        <option value="#003700"></option>
        <option value="#002966"></option>
        <option value="#3d1466"></option>
      </select>
      <select class="ql-background">
        <option value="#000000"></option>
        <option value="#e60000"></option>
        <option value="#ff9900"></option>
        <option value="#ffff00"></option>
        <option value="#008a00"></option>
        <option value="#0066cc"></option>
        <option value="#9933ff"></option>
        <option selected="selected"></option>
        <option value="#facccc"></option>
        <option value="#ffebcc"></option>
        <option value="#ffffcc"></option>
        <option value="#cce8cc"></option>
        <option value="#cce0f5"></option>
        <option value="#ebd6ff"></option>
        <option value="#bbbbbb"></option>
        <option value="#f06666"></option>
        <option value="#ffc266"></option>
        <option value="#ffff66"></option>
        <option value="#66b966"></option>
        <option value="#66a3e0"></option>
        <option value="#c285ff"></option>
        <option value="#888888"></option>
        <option value="#a10000"></option>
        <option value="#b26b00"></option>
        <option value="#b2b200"></option>
        <option value="#006100"></option>
        <option value="#0047b2"></option>
        <option value="#6b24b2"></option>
        <option value="#444444"></option>
        <option value="#5c0000"></option>
        <option value="#663d00"></option>
        <option value="#666600"></option>
        <option value="#003700"></option>
        <option value="#002966"></option>
        <option value="#3d1466"></option>
      </select>
      <button id="custom-button">
        <svg viewBox="0 0 18 18">
          <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect>
          <circle class="ql-fill" cx="6" cy="7" r="1"></circle>
          <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline>
        </svg>
      </button>
    </div>
    <div id="editor"></div>
  </div>
</template>

<style>
.ql-editor {
  min-height: 300px;
}
</style>

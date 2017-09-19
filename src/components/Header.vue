<template>
  <header class="header">
    <div class="container">
      <div class="back">
        <a href="#">Go Back</a>
      </div>
      <div class="logo">
        <img v-bind:src="logo">
      </div>
      <div class="save">
        <a href="#">Save for Later</a>
      </div>
      <div class="phone">
        <a href="#">{{phone}}</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      phone: '888-888-8888',
      logo: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTM4cHgiIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDEzOCA0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDYuMiAoNDQ0OTYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgICAgPHJlY3QgaWQ9IlJlY3RhbmdsZSIgZmlsbD0iI0Q4RDhEOCIgeD0iMCIgeT0iMCIgd2lkdGg9IjEzOCIgaGVpZ2h0PSI0OCI+PC9yZWN0PgogICAgICAgICAgICA8dGV4dCBpZD0ieW91ckJhbmsiIGZvbnQtZmFtaWx5PSJQcm94aW1hTm92YS1TZW1pYm9sZCwgUHJveGltYSBOb3ZhIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iNTAwIiBmaWxsPSIjNjg3NjgwIj4KICAgICAgICAgICAgICAgIDx0c3BhbiB4PSIzNS4zNjQiIHk9IjI4Ij55b3VyQmFuazwvdHNwYW4+CiAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  font-size: 0px;
  &:before {
    content: '';
    display: inline-block;
  }
}

.back {
  grid-area: back;
  a:before {
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIyNXB4IiB2aWV3Qm94PSIwIDAgMTUgMjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjIgKDQ0NDk2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDgzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJUb3AtQmFyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzUuMDAwMDAwLCAtNDAuMDAwMDAwKSIgZmlsbD0iIzY4NzY4MCI+CiAgICAgICAgICAgIDxnIGlkPSJGaWxsLTgzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNS4wMDAwMDAsIDQwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjU0LDI0LjkyNTYgQzE0LjQyMywyNC45MjU2IDE0LjMwNiwyNC44ODQ2IDE0LjIxMSwyNC44MDE2IEwxLjA2OCwxMy4zMDE2IEMwLjk2LDEzLjIwNjYgMC44OTgsMTMuMDcwNiAwLjg5OCwxMi45MjU2IEMwLjg5OCwxMi43ODA2IDAuOTYsMTIuNjQ0NiAxLjA2OCwxMi41NDk2IEwxNC4yMTEsMS4wNDk2IEMxNC40MTcsMC44NjY2IDE0LjczNCwwLjg4NzYgMTQuOTE3LDEuMDk2NiBDMTUuMDk4LDEuMzA0NiAxNS4wNzcsMS42MTk2IDE0Ljg2OSwxLjgwMTYgTDIuMTU3LDEyLjkyNTYgTDE0Ljg2OSwyNC4wNDk2IEMxNS4wNzcsMjQuMjMxNiAxNS4wOTgsMjQuNTQ2NiAxNC45MTcsMjQuNzU0NiBDMTQuODE3LDI0Ljg2NzYgMTQuNjc5LDI0LjkyNTYgMTQuNTQsMjQuOTI1NiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
    width: 16px;
    height: 25px;
  }
}

.logo {
  grid-area: logo;
  img {
    width: 85px;
    height: 30px;
  }
}

.save {
  grid-area: save;
  a:before {
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMTUgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjIgKDQ0NDk2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TdHJva2UgMTI1MDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSJUb3AtQmFyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjY3LjAwMDAwMCwgLTM5LjAwMDAwMCkiIHN0cm9rZT0iIzY4NzY4MCI+CiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJTdHJva2UtMTI1MCIgcG9pbnRzPSIyODEgNjMgMjc0LjUgNTYuNSAyNjggNjMgMjY4IDQwIDI4MSA0MCI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
    width: 15px;
    height: 24px;
  }
}

.phone {
  grid-area: phone;
  a:before {
    background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ2LjIgKDQ0NDk2KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgIDxnIGlkPSJUb3AtQmFyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzE5LjAwMDAwMCwgLTQwLjAwMDAwMCkiIHN0cm9rZT0iIzY4NzY4MCI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzE5LjAwMDAwMCwgNDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNy40OTE5LDEwLjAxMjIgQzguMjcyOSw5LjIzMTIgOC4yNzI5LDcuOTY1MiA3LjQ5MTksNy4xODQyIEw1LjM2OTksNS4wNjIyIEM0LjU4OTksNC4yODIyIDMuMzIyOSw0LjI4MjIgMi41NDE5LDUuMDYyMiBMMS4zNzc5LDYuMjI2MiBDMC4zNjg5LDcuMjM1MiAwLjIxMjksOC44MTAyIDAuOTk5OSwxMC4wMDEyIEM0LjM3OTksMTUuMTExMiA4Ljg4ODksMTkuNjIwMiAxMy45OTk5LDIzLjAwMTIgQzE1LjE4NzksMjMuNzg2MiAxNi43NjY5LDIzLjYzMDIgMTcuNzczOSwyMi42MjIyIEwxOC45Mzc5LDIxLjQ1ODIgQzE5LjcxODksMjAuNjc4MiAxOS43MTg5LDE5LjQxMTIgMTguOTM3OSwxOC42MzAyIEwxNi44MTY5LDE2LjUwOTIgQzE2LjAzNTksMTUuNzI4MiAxNC43Njg5LDE1LjcyODIgMTMuOTg3OSwxNi41MDkyIEwxMy4yODA5LDE3LjIxNjIgQzEwLjk1NDksMTUuMzA5MiA4LjY5MDksMTMuMDQ2MiA2Ljc4NDksMTAuNzE5MiBMNy40OTE5LDEwLjAxMjIgTDcuNDkxOSwxMC4wMTIyIFoiIGlkPSJTdHJva2UtNDk1Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuOTk5NywwLjUwMSBDMTguMzUxNywwLjUwMSAyMy40OTk3LDUuNjQ5IDIzLjQ5OTcsMTIuMDAxIiBpZD0iU3Ryb2tlLTQ5NiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjk5OTcsNC41MDEgQzE2LjE0MTcsNC41MDEgMTkuNDk5Nyw3Ljg1OSAxOS40OTk3LDEyLjAwMSIgaWQ9IlN0cm9rZS00OTciPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS45OTk3LDguNTAxIEMxMy45MzI3LDguNTAxIDE1LjQ5OTcsMTAuMDY4IDE1LjQ5OTcsMTIuMDAxIiBpZD0iU3Ryb2tlLTQ5OCI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");
    width: 24px;
    height: 24px;
  }
}

header {
  width: 100%;
  background-color: #fff;
  color: #687680;
  border-bottom: 1px solid #DCD8DB;
}

.container {
  max-width: 960px;
  height: 64px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  grid-template-areas: "back . logo save phone";
  grid-column-gap: 5px;
  align-items: center;
  justify-items: center;
}

@media only screen and (min-width: 768px) {
  header {
    border-bottom: 1px solid #E8E4E7;
    position: fixed;
    top: 0;
    z-index: 2;
    padding-left: 10px;
    padding-right: 10px;
  }
  .container {
    height: 72px;
    padding: 0 10px;
    grid-template-columns: 2fr 3fr 2fr 1fr 2fr 2fr;
    grid-template-areas: "back . logo . save phone";
    grid-column-gap: 20px;
  }
  a {
    font-family: ProximaNova;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #687680;
    text-decoration: none;
    position: relative;
    top: -5px;
    &:before {
      position: relative;
      top: 5px;
    }
  }
  .back {
    justify-self: start;
    a {
      &:before {
        margin-right: 15px;
      }
    }
  }
  .logo {
    justify-self: center;
    img {
      width: 138px;
      height: 48px;
    }
  }
  .save {
    justify-self: center;
    a {
      &:before {
        margin-right: 10px;
      }
    }
  }
  .phone {
    justify-self: end;
    a {
      &:before {
        margin-right: 10px;
      }
    }
  }
}
</style>

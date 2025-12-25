import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Nav,
  Row,
  Stack,
} from "react-bootstrap";

const Input = ({ input, setInput, item, setItem }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const clickHandler = (e) => {
    setItem([...item, { content: input, id: uuidv4(), isDone: false }]);
    setInput("");
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control type="text" onChange={inputHandler} value={input} />
      <Button onClick={clickHandler}>新增</Button>
    </InputGroup>
  );
};

const Item = ({ content, id, setIsEdit, item, setItem, isDone = false }) => {
  const deleteHandler = (e) => {
    // 避免a標籤的預設行為
    e.preventDefault();
    const newItem = item.filter((element) => element.id !== id);
    setItem(newItem);
  };

  // Item.js
  const checkHandler = (e) => {
    // 轉換 isDone 的布林值
    let newItem = item.map((i) => {
      if (i.id === id) {
        if (e.target.checked) {
          i.isDone = true;
        } else {
          i.isDone = false;
        }
      }
      return i;
    });
    setItem(newItem);
  };

  return (
    <Card>
      <Form.Check
        type="checkbox"
        id={`check-${id}`}
        className="d-flex align-items-center"
      >
        <Form.Check.Input
          type="checkbox"
          className="m-0"
          onClick={checkHandler}
          checked={isDone}
        />
        <Form.Check.Label className="w-100">
          <Card.Body id={id} className="d-flex justify-content-between">
            <span className={isDone ? "text-decoration-line-through" : ""}>
              {content}
            </span>
            <Stack direction="horizontal" gap={3}>
              <Card.Link her="#" onClick={() => setIsEdit(id)}>
                edit
              </Card.Link>
              <Card.Link
                href="#"
                style={{ marginLeft: "1.5rem" }}
                onClick={deleteHandler}
              >
                delete
              </Card.Link>
            </Stack>
          </Card.Body>
        </Form.Check.Label>
      </Form.Check>
    </Card>
  );
};

const List = ({ tab = "all", item, setItem, done, setDone, yet, setYet }) => {
  const [isEdit, setIsEdit] = useState("");
  const [newInput, setNewInput] = useState("");

  const editedHandler = (e) => {
    const newItem = item.map((i) => {
      const { id } = i;
      if (id === isEdit && newInput) {
        i.content = newInput;
        return i;
      }
      return i;
    });
    setNewInput("");
    setIsEdit("");
    setItem(newItem);
  };

  let itemList;
  if (tab === "all") {
    itemList = item;
  } else if (tab === "done") {
    itemList = done;
  } else if (tab === "yet") {
    itemList = yet;
  }

  const list = item.map((i, index) => {
    const { content, id, isDone } = i;
    return (
      <div key={{ id }}>
        {!(isEdit === id) ? (
          <Item
            content={content}
            id={id}
            setIsEdit={setIsEdit}
            item={item}
            setItem={setItem}
            done={done}
            setDone={setDone}
            yet={yet}
            setYet={setYet}
            isDone={isDone}
          />
        ) : (
          <InputGroup className="my-3">
            <Form.Control
              type="text"
              onChange={(e) => {
                setNewInput(e.target.value);
              }}
              defaultValue={content}
            />
            <Button onClick={editedHandler}>提交</Button>
          </InputGroup>
        )}
      </div>
    );
  });

  return <div>{list}</div>;
};

// 分頁
const Tab = ({ item, done, yet, setItem, setDone, setYet }) => {
  const [tab, setTab] = useState("all");

  const tabNandler = (e) => {
    setTab(e.target.id);
  };

  return (
    <div>
      {/*預設顯示 全部 頁*/}
      <Nav variant="tabs" fill defaultActiveKey="all">
        <Nav.Item>
          <Nav.Link eventKey="all" id="all" onClick={tabNandler}>
            全部
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="done" id="done" onClick={tabNandler}>
            已完成
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="yet" id="yet" onClick={tabNandler}>
            未完成
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <List
        tab={tab}
        item={item}
        done={done}
        yet={yet}
        setItem={setItem}
        setDone={setDone}
        setYet={setYet}
      />
    </div>
  );
};

function App() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [done, setDone] = useState([]);
  const [yet, setYet] = useState([]);

  useEffect(() => {
    // 如果項目長度不為 0 ， 處理項目
    if (item.length !== 0) {
      const newDone = item.filter((i) => i.isDone === true);
      const newYet = item.filter((i) => i.isDone === false);

      setDone(newDone);
      setYet(newYet);
    } else {
      // 如果長度是 0 ，則將 done、yet 設為空 array
      setDone([]);
      setYet([]);
    }
  }, [item]);

  return (
    <>
      <Container>
        <Row>
          <Col xs="7" className="mx-auto">
            <div className="py-3">
              <h1 className="text-center">Todo List</h1>
              <Input
                input={input}
                setInput={setInput}
                item={item}
                setItem={setItem}
              />
              <Tab
                item={item}
                done={done}
                yet={yet}
                setItem={setItem}
                setDone={setDone}
                setYet={setYet}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;

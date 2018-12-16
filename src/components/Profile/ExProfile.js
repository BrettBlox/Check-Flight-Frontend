import React from "react";
import { Row, Input, Card, Button, Icon } from "react-materialize";
import Calendar from "../../containers/Calendar/Calendar";

const ExProfile = ({ editToggle, isDisabled, onchange, date, logout }) => {
  const bio =
    "That's a son of a gun of a cloud. Isn't it great to do something you can't fail at? Talent is a pursued interest. That is to say, anything you practice you can do. And right there you got an almighty cloud. You can bend rivers. But when I get home, the only thing I have power over is the garbage. Maybe there's a little something happening right here. Working it up and down, back and forth. Here's another little happy bush I get carried away with this brush cleaning. Trees cover up a multitude of sins. We don't have to be concerned about it. We just have to let it fall where it will. Give him a friend, we forget the trees get lonely too. That is when you can experience true joy, when you have no fear. Get tough with it, get strong.";

  const toggle = e => {
    editToggle(e);
  };

  return (
    <Card>
      <Card style={{ textAlign: "center" }}>
        <Icon large>account_circle</Icon>
        <h4>Examiner Profile</h4>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "1em" }}
        >
          <Button
            style={{ width: "50%" }}
            onClick={toggle}
            className="green accent-3 col s12 m1 right"
            type="submit"
          >
            EDIT PROFILE
          </Button>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "1em" }}
        >
          <Button
            style={{ width: "50%" }}
            className="green accent-3 col s12 m1 right"
            type="submit"
            onClick={logout}
          >
            LOGOUT
          </Button>
          <br />
          <br />
          <br />
        </div>
        <Row>
          <Input
            s={12}
            m={6}
            l={3}
            label="First Name"
            defaultValue="Shawn"
            disabled={isDisabled}
          />

          <Input
            s={12}
            m={6}
            l={3}
            label="Last Name"
            defaultValue="Milne"
            disabled={isDisabled}
          />
          <Input
            s={12}
            m={6}
            l={3}
            label="Phone"
            defaultValue="978-290-1692"
            disabled={isDisabled}
          />

          <Input
            s={12}
            m={6}
            l={3}
            label="Email"
            defaultValue="Shawn.M.Milne@gmail.com"
            disabled={isDisabled}
          />
          <Input
            s={12}
            m={6}
            l={3}
            label="Rate"
            defaultValue="$800"
            disabled={isDisabled}
          />

          <Input
            s={12}
            label="Bio"
            type="textarea"
            defaultValue={bio}
            disabled={isDisabled}
          />
        </Row>
        <Card>
          <h4 className="col s12 m9 ">Airports</h4>
          <Row>
            <Input name="group1" type="checkbox" value="red" label="Red" />
            <Input
              name="group1"
              type="checkbox"
              value="yellow"
              label="Yellow"
              defaultValue="checked"
            />
            <Input
              name="group1"
              type="checkbox"
              defaultValue="green"
              label="Green"
              className="filled-in"
            />
            <Input
              name="group1"
              type="checkbox"
              defaultValue="brown"
              label="Brown"
              disabled="disabled"
            />
            <Input name="group1" type="checkbox" value="red" label="Red" />
            <Input
              name="group1"
              type="checkbox"
              defaultValue="yellow"
              label="Yellow"
            />
            <Input
              name="group1"
              type="checkbox"
              defaultValue="green"
              label="Green"
              className="filled-in"
            />
            <Input
              name="group1"
              type="checkbox"
              defaultValue="brown"
              label="Brown"
              disabled="disabled"
            />
            <Input name="group1" type="checkbox" value="red" label="Red" />
            <Input
              name="group1"
              type="checkbox"
              defaultValue="yellow"
              label="Yellow"
            />
            <Input
              name="group1"
              type="checkbox"
              defaultValue="green"
              label="Green"
              className="filled-in"
            />
            <Input
              name="group1"
              type="checkbox"
              defaultValue="brown"
              label="Brown"
              disabled="disabled"
            />
            <Input name="group1" type="checkbox" value="red" label="Red" />
            <Input
              name="group1"
              type="checkbox"
              defaultValue="yellow"
              label="Yellow"
            />
            <Input
              name="group1"
              type="checkbox"
              defaultValue="green"
              label="Green"
              className="filled-in"
            />
          </Row>
        </Card>
        <Calendar />{" "}
        {isDisabled ? null : (
          <Row>
            <Button
              onClick={toggle}
              className="col s2 m2 offset-m5 offset-s5 green accent-3"
              type="submit"
            >
              Submit Changes
            </Button>
          </Row>
        )}
      </Card>
    </Card>
  );
};

export default ExProfile;

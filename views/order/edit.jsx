var React = require("react");
var DefaultLayout = require('../layouts/default');

class Edit extends React.Component {
  render() {

  	var actionUrl = '/order/'+this.props.id+'/edit?_method=PUT';

    return (
      <DefaultLayout title="Edit Order">
      <div class="container">
      <div class="row jumbotron">
        <h1>EDIT ORDER</h1>
      </div>
      <div class="row">
      <div class="col-lg-6 col-sm-12 col-xs-12">
          <form method="POST" action={actionUrl}>
            <div class="form-group row">
              <label for="inputOrderid6">Order Id</label>
              <input name="id" id="inputOrderid6" value={this.props.id} readOnly="readonly" class="form-control"/>
            </div>
            <div class="form-group row">
              <label for="inputPrice6">Price</label>
              <input name="price" id="inputPriceid6" value={this.props.price} class="form-control"/>
            </div>
            <div class="form-group row">
              <label for="inputQty6">Quantity</label>
              <input name="qty" id="inputQty6" value={this.props.qty} class="form-control"/>
            </div>
            <div class="form-group row">
              <label for="inputType6">Order Type</label>
              <input name="ordertype" id="inputType6" value={this.props.ordertype} readOnly="readonly" class="form-control"/>
            </div>
			<input name="ticker" value={this.props.ticker} type="hidden"/>
			<input name="user_id" value={this.props.user_id} type="hidden" />
            <div class="form-group row">
              <button class="btn btn-secondary" type="submit">Edit</button>
            </div>
          </form>
        </div>
        </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;

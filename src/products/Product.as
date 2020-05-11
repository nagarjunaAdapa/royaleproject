////////////////////////////////////////////////////////////////////////////////
//
//  Licensed to the Apache Software Foundation (ASF) under one or more
//  contributor license agreements.  See the NOTICE file distributed with
//  this work for additional information regarding copyright ownership.
//  The ASF licenses this file to You under the Apache License, Version 2.0
//  (the "License"); you may not use this file except in compliance with
//  the License.  You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//
////////////////////////////////////////////////////////////////////////////////
package products
{
	public class Product
	{
		private var _id:String;
		private var _name:String;
		private var _phone:Number;
		private var _email:String;
		
		public function Product(id:String,name:String,phone:Number,email:String)
		{
			this._id = id;
			this._name = name;
			this._phone = phone;
			this._email = email;
			//this._image = image;
		}
		
		public function get id():String
		{
			return _id;
		}
		
		public function get name():String
		{
			return _name;
		}
		
		public function get phone():Number
		{
			return _phone;
		}
		
		/*public function get image():String
		{
			return _image;
		}*/
		
		public function get email():String
		{
			return _email;
		}
		
	}
}


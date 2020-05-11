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
package models
{
	import org.apache.royale.collections.ArrayList;
	import products.Product;

	public class ProductsModel
	{
		public var _productList:ArrayList = new ArrayList([
            new Product("ps100","Udaya",91965131659,"Udaya@WalkingTree.tech"),
			new Product("tx200","Suman",91465515419,"SumanRavuri@WalkingTree.tech"),
			new Product("rz300","Abhilasha",94123564216,"Abhilasha@WalkingTree.tech"),
            
		]);

		public function get productList():ArrayList
		{
			return _productList;
		}
		
		public var _productArray:Array = [
		
		];
		
		public function get productArray():Array
		{
			return _productArray;
		}
	}
}

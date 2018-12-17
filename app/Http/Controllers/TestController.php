<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TestController extends Controller
{
	public function showQuestion( $id ) {
		$question = DB::table('questions')->find($id);
		return response()->json($question);

	}

	public function questions() {
		$questions = DB::table('questions')->get();
		return response()->json($questions);

	}
	
	public function news() {
		$client = new \GuzzleHttp\Client();
		$res = $client->request('GET', 'http://api.komavideo.com/news/list/');
		$res = $res->getBody()->getContents();
		return response($res);
    }
}

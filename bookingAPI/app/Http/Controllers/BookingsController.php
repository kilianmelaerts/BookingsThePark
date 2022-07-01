<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Log;
use Exception;
use App\Models\Booking;

class BookingsController extends Controller
{
    //CRUD

    //get all bookings
    public function read(){
        try{
            $bookings = Booking::orderBy('date', 'asc')->get();
            return response()->json($bookings);
        }catch(Exception $e){
            Log::error($e);
        }
    }

    //create booking
    public function create(Request $request){
        try{
            $data = $request->validate([
                'name' => 'required|max:255',
                'email' => 'required|max:40',
                'company' => 'required|max:255',
                'players' => 'required|integer|between:2,8',
                'date' => 'required|date',
                'private' => 'required|boolean',
                'room' => 'required|integer|between:1,2'
            ]);
            $show = Booking::create($data);
            $success = true;
            return response()->json(json_encode($success));
        }catch(Exception $e){
            Log::error($e);
            return response()->json(json_encode($e));
        }
    }

    //update booking
    public function update(Request $request, $id){
        try{
            $data = $request->validate([
                'name' => 'required|max:255',
                'email' => 'required|max:40',
                'company' => 'required|max:255',
                'players' => 'required|integer|between:2,100',
                'date' => 'required|date',
                'private' => 'required|boolean',
                'room' => 'required|integer|between:1,2'
            ]);
            Booking::whereId($id)->update($data);
            $success = true;
            return response()->json(json_encode($success));
        }catch(Exception $e){
            Log::error($e);
            return response()->json(json_encode($e));
        }
    }

    public function delete($id){
        try{
            Booking::whereId($id)->delete();
            $success = true;
            return response()->json(json_encode($success));
        }catch(Exception $e){
            Log::error($e);
            return response()->json(json_encode($e));
        }
    }
}
